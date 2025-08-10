# 这是批量删除脚本的代码
#!/bin/bash

total=0
success=0
failed=0
branches=""

# 检查参数
if [ -z "$1" ]; then
    echo "Usage: $0 \"branch_pattern\""
    echo "Example: $0 \"origin/feature/\""
    exit 1
fi

# 获取并过滤分支
while read -r b; do
    branch=$(echo "$b" | sed 's/^origin\///' | tr -d ' ')
    total=$((total + 1))
    branches="$branches $branch"
done < <(git branch -r | grep "$1")

echo "将要删除以下远程分支（共 $total 个）:"
for b in $branches; do
    echo "$b"
done

read -p "确认删除这些分支吗? [y/N] " confirm
if [[ "${confirm,,}" == "y" ]]; then
    for b in $branches; do
        echo "正在删除分支: $b"
        if git push origin --delete "$b" 2>/dev/null; then
            echo "[成功] $b"
            success=$((success + 1))
        else
            echo "[失败] $b（可能已不存在）"
            failed=$((failed + 1))
        fi
    done
    echo "删除完成：成功 $success 个，失败 $failed 个，总计 $total 个"
else
    echo "操作已取消"
fi