📒 QuickNotes 笔记
一个轻量级的本地笔记软件，基于 Electron 开发，支持 Windows 桌面应用

Version Windows License

✨ 功能特点
📝 新建笔记 - 快速创建笔记，自动保存
🗂️ 笔记本分组 - 将笔记分类到不同笔记本
🏷️ 分类标签 - 用标签管理笔记内容
🔍 全文搜索 - 快速查找笔记内容
🕐 时间线视图 - 按时间查看笔记
🃏 卡片视图 - 美观的卡片展示
🍅 番茄钟 - 内置计时专注功能
💾 本地存储 - 数据存在本地，安全放心
🌙 中文界面 - 全中文菜单和操作提示
📥 下载安装
Windows 用户（三个版本任选）
版本	文件	大小	说明
🖱️ 安装版（推荐新手）	QuickNotes Setup 1.0.0.exe	~97 MB	双击安装，有桌面快捷方式
🎒 单文件便携版	QuickNotes-1.0.0-Portable.exe	~97 MB	双击即可运行，无需安装
📦 绿色免安装版	QuickNotes-1.0.0-green.zip	~141 MB	解压后运行 QuickNotes.exe
🚀 国内下载
方式一：阿里云镜像加速（推荐）
点击下方链接即可下载：

🖱️ 安装版（推荐新手）： https://registry.npmmirror.com/binary.html?url=https://github.com/Billjack1314/my-notes-app/releases/download/v1.0.0/QuickNotes%20Setup%201.0.0.exe

🎒 便携版（双击即用）： https://registry.npmmirror.com/binary.html?url=https://github.com/Billjack1314/my-notes-app/releases/download/v1.0.0/QuickNotes-1.0.0-Portable.exe

📦 绿色版（解压即用）： https://registry.npmmirror.com/binary.html?url=https://github.com/Billjack1314/my-notes-app/releases/download/v1.0.0/QuickNotes-1.0.0-green.zip

# 1. 安装依赖
npm install

# 2. 本地运行
npm start

# 3. 打包发布
npm run build
# 产物在 dist/ 目录
📁 项目结构

Plain Text

my-notes-app/
├── index.html          # 应用主页面（UI + 业务逻辑）
├── main.js             # Electron 主进程
├── package.json        # 项目配置
├── build/              # 图标资源
│   └── icon.ico        # Windows 应用图标
└── dist/               # 构建产物（build 后生成）
⌨️ 快捷键
按键	功能
Ctrl + N	新建笔记
Ctrl + S	保存
Ctrl + F	搜索笔记
Ctrl + T	番茄钟
F5	刷新
F12	开发者工具
📦 打包说明
本项目使用 Electron + electron-builder 打包。

安装版（NSIS）：带安装向导
便携版：单个 exe 文件，直接运行
绿色版：zip 压缩包，解压即用
📜 许可证
MIT License - 免费开源，可随意使用、修改、商用

Copyright (c) 2026 Billjack1314

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Made with ❤️ using Electron

