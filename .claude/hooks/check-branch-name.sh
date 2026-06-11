#!/bin/bash
# PreToolUse hook: block commits on main; block push/merge if branch name non-compliant

INPUT=$(cat)
COMMAND=$(python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('tool_input',{}).get('command',''))" <<< "$INPUT" 2>/dev/null)

# Block git commit on main
if echo "$COMMAND" | grep -qE '^git commit'; then
  BRANCH=$(git branch --show-current 2>/dev/null)
  if [ "$BRANCH" = "main" ]; then
    echo "⚠️  目前在 main branch，不能直接 commit。"
    echo ""
    echo "請先開一個 branch："
    echo "  git checkout -b {type}/{short-description}"
    exit 1
  fi
  exit 0
fi

# Only trigger on git push or git merge
if ! echo "$COMMAND" | grep -qE '^git (push|merge)'; then
  exit 0
fi

BRANCH=$(git branch --show-current 2>/dev/null)

# Skip if on main or detached HEAD
if [ "$BRANCH" = "main" ] || [ -z "$BRANCH" ]; then
  exit 0
fi

# Check length
if [ ${#BRANCH} -gt 50 ]; then
  echo "⚠️  Branch 名稱過長（${#BRANCH} 字元，上限 50）：\`$BRANCH\`"
  echo ""
  echo "請先 rename：git branch -m $BRANCH {new-name}"
  exit 1
fi

# Check format: {type}/{short-description}
VALID_TYPES="feature|fix|sync|content|chore|docs"
if echo "$BRANCH" | grep -qE "^($VALID_TYPES)/[a-z0-9][a-z0-9-]+$"; then
  exit 0
fi

# Non-compliant name
echo "⚠️  Branch 名稱不符合規則：\`$BRANCH\`"
echo ""
echo "格式：{type}/{short-description}  （全小寫，hyphen 分隔，最多 50 字元）"
echo "Type：feature / fix / sync / content / chore / docs"
echo ""
echo "請先 rename 再繼續："
echo "  git branch -m $BRANCH {new-name}"
exit 1
