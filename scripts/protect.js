#!/usr/bin/env node
// 在 dist/index.html 注入密碼 gate。
//
// 預設密碼（所有簡報）：
//   UI_SLIDES_DEFAULT_PASSWORD=xxx npm run build
//
// 單支簡報密碼（只允許進入該簡報）：
//   SLIDE_PASSWORD_EDU_UI_WORKFLOW=xxx npm run build
//   env var 命名規則：SLIDE_PASSWORD_<SLIDE_ID 大寫、連字號改底線>

import { readFileSync, writeFileSync, copyFileSync } from 'fs';
import { resolve } from 'path';
import { createHash } from 'crypto';

function sha256(str) {
  return createHash('sha256').update(str).digest('hex');
}

// ── 預設密碼 ──────────────────────────────────────────────────────────────────
const defaultPassword = process.env.UI_SLIDES_DEFAULT_PASSWORD;
if (!defaultPassword) {
  console.error('錯誤：請設定 UI_SLIDES_DEFAULT_PASSWORD 環境變數再執行 build。');
  process.exit(1);
}
const defaultHash = sha256(defaultPassword);

// ── 單支簡報密碼（選填）──────────────────────────────────────────────────────
// 掃描 SLIDE_PASSWORD_<SLIDE_ID> 格式的環境變數
// 例：SLIDE_PASSWORD_EDU_UI_WORKFLOW → slideId: 'edu-ui-workflow'
const slideHashes = {};
for (const [key, val] of Object.entries(process.env)) {
  const match = key.match(/^SLIDE_PASSWORD_(.+)$/);
  if (match && val) {
    const slideId = match[1].toLowerCase().replace(/_/g, '-');
    slideHashes[slideId] = sha256(val);
  }
}

// ── Gate 注入內容 ─────────────────────────────────────────────────────────────
const gate = `
<style>
  #pw-gate input:focus { border-color: rgba(92,92,240,0.8) !important; }
  #pw-gate button:hover { background: #4a4adb !important; }
</style>
<div id="pw-gate" style="position:fixed;inset:0;background:#080d1c;display:flex;align-items:center;justify-content:center;z-index:99999;font-family:system-ui,sans-serif;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:20px;width:100%;max-width:380px;padding:0 32px;box-sizing:border-box;">
    <div style="font-size:13px;letter-spacing:0.18em;text-transform:uppercase;color:#5c5cf0;font-family:monospace;">edu-ui-slides</div>
    <div style="font-size:30px;font-weight:700;color:#e2e6f5;letter-spacing:-0.02em;">簡報存取</div>
    <input id="pw-input" type="password" placeholder="輸入密碼" autocomplete="current-password"
      style="width:100%;padding:14px 20px;background:#0e1428;border:1px solid rgba(92,92,240,0.32);border-radius:10px;color:#e2e6f5;font-size:18px;outline:none;box-sizing:border-box;" />
    <button id="pw-btn"
      style="width:100%;padding:14px;background:#5c5cf0;border:none;border-radius:10px;color:#fff;font-size:18px;font-weight:600;cursor:pointer;">進入</button>
    <div id="pw-err" style="color:#fbbf24;font-size:14px;opacity:0;transition:opacity 0.2s;">密碼錯誤，請重試</div>
  </div>
</div>
<script>
(function () {
  // 預設密碼 hash（可進入所有簡報）
  var DEFAULT_HASH = '${defaultHash}';
  // 單支簡報密碼 hash，key 為 slideId
  var SLIDE_HASHES = ${JSON.stringify(slideHashes)};

  var DEFAULT_KEY = 'slide-auth';
  var FOLDER = '?f=f-3f4148a6';

  function remove() { var g = document.getElementById('pw-gate'); if (g) g.remove(); }

  function currentSlideId() {
    var m = window.location.pathname.match(/\/s\/([^/]+)/);
    return m ? m[1] : null;
  }

  function goPublish() {
    var loc = window.location;
    if (!loc.pathname.includes('/s/') && !loc.search.includes('f=')) {
      window.location.replace(loc.pathname + FOLDER);
      return true;
    }
    return false;
  }

  function isAuthorized() {
    // 預設密碼：可進入所有頁面
    if (sessionStorage.getItem(DEFAULT_KEY) === DEFAULT_HASH) return true;
    // 單支密碼：只在該簡報頁面有效
    var slideId = currentSlideId();
    if (slideId && SLIDE_HASHES[slideId]) {
      if (sessionStorage.getItem('slide-auth-' + slideId) === SLIDE_HASHES[slideId]) return true;
    }
    return false;
  }

  if (isAuthorized()) { remove(); goPublish(); return; }

  async function check() {
    var val = document.getElementById('pw-input').value;
    var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(val));
    var hex = Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');

    if (hex === DEFAULT_HASH) {
      sessionStorage.setItem(DEFAULT_KEY, DEFAULT_HASH);
      if (!goPublish()) remove();
      return;
    }

    // 檢查是否符合某支簡報的專屬密碼
    for (var slideId in SLIDE_HASHES) {
      if (hex === SLIDE_HASHES[slideId]) {
        sessionStorage.setItem('slide-auth-' + slideId, hex);
        window.location.replace(window.location.pathname.replace(/\/s\/[^/]+/, '') + 's/' + slideId);
        return;
      }
    }

    var err = document.getElementById('pw-err');
    err.style.opacity = '1';
    setTimeout(function () { err.style.opacity = '0'; }, 2000);
  }

  document.getElementById('pw-btn').addEventListener('click', check);
  document.getElementById('pw-input').addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
})();
</script>
`;

// ── 停用全螢幕 API ────────────────────────────────────────────────────────────
const noFullscreen = `<script>Element.prototype.requestFullscreen = async function(){};</script>`;

// ── 寫入 dist ─────────────────────────────────────────────────────────────────
const htmlPath = 'dist/index.html';
const html = readFileSync(htmlPath, 'utf8');
writeFileSync(htmlPath, html.replace('</head>', noFullscreen + '\n</head>').replace('</body>', gate + '\n</body>'));

writeFileSync('dist/404.html', readFileSync(htmlPath, 'utf8'));

// Replace favicon in both files
copyFileSync(resolve('assets/favicon.png'), 'dist/favicon.png');
for (const file of ['dist/index.html', 'dist/404.html']) {
  writeFileSync(
    file,
    readFileSync(file, 'utf8').replace(
      /<link rel="icon"[^>]*>/,
      '<link rel="icon" type="image/png" href="./favicon.png" />',
    ),
  );
}

console.log('✓ password gate injected');
if (Object.keys(slideHashes).length > 0) {
  console.log(`  per-slide : ${Object.keys(slideHashes).join(', ')}`);
}
console.log('✓ 404.html created for SPA routing');
console.log('✓ favicon replaced');
console.log(`  default hash : ${defaultHash}`);
