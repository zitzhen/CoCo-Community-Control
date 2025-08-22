@echo off
setlocal enabledelayedexpansion

set "total=0"
set "success=0"
set "failed=0"

:: 检查参数
if "%1"=="" (
    echo Usage: %0 "branch_pattern"
    echo Example: %0 "origin/feature/"
    exit /b 1
)

:: 获取并过滤分支
for /f "delims=" %%b in ('git branch -r ^| findstr "%1"') do (
    set "branch=%%b"
    set "branch=!branch:origin/=!"
    set "branch=!branch: =!"
    set /a total+=1
    set branches=!branches! !branch!
)

echo 将要删除以下远程分支（共 %total% 个）:
for %%b in (%branches%) do echo %%b

set /p confirm=确认删除这些分支吗? [y/N] 
if /i "!confirm!"=="y" (
    for %%b in (%branches%) do (
        echo 正在删除分支: %%b
        git push origin --delete %%b 2>nul && (
            echo [成功] %%b
            set /a success+=1
        ) || (
            echo [失败] %%b（可能已不存在）
            set /a failed+=1
        )
    )
    echo 删除完成：成功 !success! 个，失败 !failed! 个，总计 !total! 个
) else (
    echo 操作已取消
)