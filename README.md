# edu-ui-slides

使用 [open-slide](https://github.com/1weiho/open-slide) 建立的簡報集合。

## Repository Structure

```txt
edu-ui-slides/
├─ slides/
│  └─ {slide-id}/       # 每個簡報一個資料夾
│     └─ index.tsx
├─ themes/               # 共用視覺主題
├─ assets/               # 共用素材（logos 等）
├─ skills/               # Claude Code skills（git 工作流程）
├─ open-slide.config.ts
└─ package.json
```

## 開發

```bash
npm run dev
```

## 簡報清單

| 資料夾 | 主題 |
|--------|------|
| `edu-ui-design-knowledge` | edu-ui-design-md 設計知識層維護指南 |

## Skills

`skills/` 資料夾存放給 Claude Code 執行的任務說明。

詳見 [skills/README.md](skills/README.md)。
