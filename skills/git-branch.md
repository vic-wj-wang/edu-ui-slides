# Git Branch

這個 repo 使用 GitHub Flow：所有改動從 `main` 開 branch，完成後透過 PR 合回 `main`。

## 格式

```
{type}/{short-description}
```

- 全小寫，單字之間用 hyphen（`-`）分隔
- 不使用底線（`_`）或 camelCase
- 長度控制在 50 字元以內
- `type` 對應 `git-commit.md` 的 commit types

## Types

| Type | 用途 |
|---|---|
| `feature` | 新功能、新 section、新 skill、新產品層 |
| `fix` | 修正錯誤資訊、broken links 或 script bug |
| `sync` | 重新產生 generated files |
| `content` | 更新設計規則、guidance、說明文字 |
| `chore` | 維護性調整（rename、reorganize） |
| `docs` | 更新 README、CHANGELOG、DESIGNER★.md |

## 範例

```
feature/add-manager-design-layer
feature/hub-colors-section
fix/hub-token-spacing-values
sync/update-components-from-guideline
content/shared-elevation-rules
docs/update-contributing-guide
chore/remove-agents-folder
```

## 規則

- `main` 是唯一的長期分支，永遠保持可用狀態
- Branch 合回 `main` 後刪除
- 一個 branch 對應一個明確的改動目的，不混用
