# 上传控件贡献指南
感谢你愿意为CoCo-Community上传您的控件！🎉 无论是UI控件还是功能控件，我们都非常欢迎。

在参与之前，请花几分钟时间阅读本指南，以确您能正确的上传您的控件。

## 📌 如何提交控件
### 方法1:发送电子邮件
这是最简单的控件推送方式，您只需要将以下材料发送给`oliverxiaozhen@outlook.com`我们会在7天内将您的控件添加。
材料：
- 控件源文件
- 控件描述
- Github信息
- 版本信息
### 方法2:自行提交
这是复杂的方式，但会在Github仓库贡献者列表中出现：）
#### 1. 第一步：克隆仓库
您需要克隆[CoCo-Community-Control](https://github.com/zitzhen/CoCo-Community-Control)仓库。
在您克隆的仓库中，创建新的分支并命名为`new-control/your_control`
在新的分支中导入文件。
文件格式
```
your_control|
    |1.0.0-->版本号
        |control.jsx-->控件文件 必须命名为此文件名
    |README.md -->控件描述文件
    |information.json  -->控件配置文件
```
information.json文件内容示范
```json
{
    "Release_input": "发行版数量",
    "Current_version":"最新版本号",
    "author":"Github作者用户名",
    "Latest_submission_time":false,
    "Version_number_list":[
        "第一个版本号",
        "第二的版本号"
    ]
}
```
## ❓ 需要帮助？
如果你对如何贡献有疑问，可以：

联系项目工程师
- 刘小圳（oliverxiaozhen@outlook.com）

## 🙏 致谢
感谢每一位贡献者的支持！你的努力让这个项目变得更好！✨

