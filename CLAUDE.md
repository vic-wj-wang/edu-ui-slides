# edu-ui-slides 簡報編輯指南

## 文字風格

- 減少使用「——」（破折號），改用句號、分號或拆成兩句表達
- 說明文字以簡潔為主，避免過長的單一句子
- 繁體中文撰寫

## 新增或修改頁面

- 修改 `slides/edu-ui-design-knowledge/index.tsx`
- 每一頁為獨立的 React component，對應 `pages` 陣列的順序即為頁碼
- 新增頁面後，記得將 component 加入檔案底部的 `pages` 陣列

## 版面預算（height budget）

頁面 padding 上下各 120px，可用高度約 840px，加入內容前先評估是否會溢出。
常見元素高度參考：

| 元素 | 約高 |
|---|---|
| eyebrow（24px mono）+ gap 32 | ~56px |
| h2（80px）+ margin 40 | ~120px |
| body 段落（38px × 1.5）+ margin | ~90px |
| 三欄卡片 | ~270px |
| 標註框 callout | ~80px |

## 連結樣式

外部連結統一使用以下格式，保持與頁面風格一致：

```tsx
<a
  href="..."
  target="_blank"
  rel="noreferrer"
  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: font.mono, fontSize: 22, color: c.muted, textDecoration: 'none' }}
>
  <span style={{ color: 'var(--osd-accent)' }}>↗</span>
  連結文字
</a>
```

## 啟動開發伺服器

```bash
node_modules/.bin/open-slide dev --port 5176
```
