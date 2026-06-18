# CHANGELOG.md

這個檔案用來記錄 repository 的專案調整紀錄。

請用它記錄有意義的 repository structure、scope、naming 與 governance 調整。

這不是產品 release changelog。

## 2026-06-18（部署與互動調整）

### Added

- **GitHub Pages 部署**：新增 `.github/workflows/deploy.yml`，推送 main 自動觸發 build 與部署。
- **密碼保護**：`scripts/protect.js` 在 build 後注入密碼 gate，密碼以 SHA-256 驗證，預設 `vsds2026`，可透過 `SLIDE_PASSWORD` secret 設定。
- **Draft / Publish 資料夾結構**：`slides/.folders.json` 新增 Draft 與 Publish 兩個資料夾；新增 `scripts/publish-slide.js`，執行 `node scripts/publish-slide.js <slideId>` 可將簡報從 Draft 移至 Publish，`--unpublish` 可反向操作。
- **回到首頁按鈕**：`src/design/base.tsx` 新增 `BackToFirstButton` 元件，顯示於每支簡報最後一頁（Closing）右上角，點擊跳回第一頁。
- **自訂 favicon**：`assets/favicon.png` 加入品牌圖示，build 時由 `scripts/protect.js` 替換 `dist/index.html` 的 favicon。

### Changed

- **Viewer-only 模式**：production build 設定 `showSlideUi: false`，簡報頁面只顯示 Player，無工具列、無返回按鈕。`showSlideBrowser: true` 讓首頁 slide browser 正常運作。
- **複製連結行為**：點擊 Copy link 按鈕時，剪貼簿與新開視窗均指向第一頁 URL（移除 `?p=` 參數）。

### Fixed

- **SPA 路由 404**：build 後將 `dist/index.html` 複製為 `dist/404.html`，解決 GitHub Pages 直接存取 `/s/<slideId>` 回傳 404 的問題。
- **密碼空字串**：GitHub Actions 未設定 secret 時環境變數為空字串而非 `undefined`，改用 `||` 確保 fallback 至預設密碼。
- **自動全螢幕**：production 環境 Player 元件預設呼叫 `requestFullscreen()`。於 `</head>` 前注入 `Element.prototype.requestFullscreen = async function(){}` 攔截，避免觀者開啟簡報時直接進入全螢幕模式。

## {YYYY-MM-DD}（初始化）

### Added

- 初始化 repository
