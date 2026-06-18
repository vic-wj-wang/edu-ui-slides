#!/usr/bin/env node
// 在 dist/index.html 注入密碼 gate。
// 設定密碼：SLIDE_PASSWORD=yourpassword npm run build
// 若未設定，預設為 vsds2026

import { readFileSync, writeFileSync } from 'fs';
import { createHash } from 'crypto';

const password = process.env.SLIDE_PASSWORD || 'vsds2026';
const expectedHash = createHash('sha256').update(password).digest('hex');

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
  var HASH = '${expectedHash}';
  var KEY = 'slide-auth';
  if (sessionStorage.getItem(KEY) === HASH) { remove(); return; }
  function remove() { var g = document.getElementById('pw-gate'); if (g) g.remove(); }
  async function check() {
    var val = document.getElementById('pw-input').value;
    var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(val));
    var hex = Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    if (hex === HASH) { sessionStorage.setItem(KEY, HASH); remove(); }
    else {
      var err = document.getElementById('pw-err');
      err.style.opacity = '1';
      setTimeout(function () { err.style.opacity = '0'; }, 2000);
    }
  }
  document.getElementById('pw-btn').addEventListener('click', check);
  document.getElementById('pw-input').addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
})();
</script>
`;

const htmlPath = 'dist/index.html';
const html = readFileSync(htmlPath, 'utf8');
writeFileSync(htmlPath, html.replace('</body>', gate + '\n</body>'));

console.log('✓ password gate injected');
console.log(`  password : "${password}"`);
console.log(`  hash     : ${expectedHash}`);
