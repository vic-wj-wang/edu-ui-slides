# Git Commit Message

為這個 repo 建立 Git commit 時，使用 Conventional Commits 格式。

## 格式

```
<type>(<scope>): <short summary>

[optional body]
```

- `type` + `scope` 使用英文小寫
- `short summary` 使用英文，動詞開頭，不加句號，50 字元以內
- `body` 說明「為什麼」而非「做了什麼」，每行 72 字元以內

## Types

| Type | 用途 |
|---|---|
| `feat` | 新增 repo structure、新 skill、新 script 或新 section |
| `fix` | 修正錯誤資訊、broken links 或 script bug |
| `content` | 新增或更新設計規則、guidance、說明文字 |
| `sync` | 從來源 repo 重新生成 generated files |
| `chore` | 維護性調整（rename、reorganize、依賴更新） |
| `docs` | 更新 README、CHANGELOG 或 docs/ |

## Scopes

| Scope | 對應範圍 |
|---|---|
| `skills` | `skills/` |
| `docs` | `docs/` |

> 依各 repo 需求自行擴充 scopes。

## 範例

```
feat(skills): add generate-tokens skill and script

content(docs): add page layout rules

fix(skills): correct broken link in git-branch.md

chore: rename folder structure

docs(readme): update repository structure
```

## 流程

1. 確認這次變動屬於哪個 type 和 scope
2. 用一句話描述 summary（英文動詞開頭）
3. 若有多個重要決策，加 body 說明原因
4. 執行 `git add` 加入相關檔案後 commit
