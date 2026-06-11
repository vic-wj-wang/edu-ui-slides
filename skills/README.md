# Skills

這個資料夾存放給 AI coding agent（Claude Code）執行的任務說明。透過自然語言 prompt 觸發，agent 會讀取對應的 skill 並執行。

## 安裝

| Skill | 觸發語句範例 | 說明 |
|---|---|---|
| [setup](setup.md) | 「讀取 edu-ui-repo-template」、「安裝範本」 | 引導設計師將範本基礎檔案安裝至新專案 |

## Git 工作流程

| Skill | 觸發語句範例 | 說明 |
|---|---|---|
| [git-branch](git-branch.md) | 建立 Git branch 時 | GitHub Flow branch 命名規則，含 types 與範例 |
| [git-commit](git-commit.md) | 建立 Git commit 時 | Conventional Commits 格式規範，含 types、scopes 與範例 |

## 如何新增 Skill

1. 在 `skills/` 新增 `{skill-name}.md`，說明任務步驟與所需指令
2. 在此 `README.md` 的表格新增對應條目
