#!/bin/bash
# 偵測有非文件類檔案變動時，詢問是否更新 README.md / CHANGELOG.md / skills/README.md

REPO=$(git rev-parse --show-toplevel 2>/dev/null)

if [ -z "$REPO" ]; then
  exit 0
fi

CHANGES=$(git -C "$REPO" status --short 2>/dev/null \
  | grep -vE '^\?\?' \
  | grep -cvE '(README\.md|CHANGELOG\.md|skills/README\.md)' || echo 0)

if [ "$CHANGES" -gt 0 ]; then
  echo "📝 有檔案更動 — 是否需要更新 README.md、CHANGELOG.md 或 skills/README.md？"
fi
