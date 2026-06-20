const { app, BrowserWindow, Menu, dialog } = require('electron');
const path = require('path');

app.name = 'QuickNotes 笔记';

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'QuickNotes 笔记',
        width: 1200,
        height: 800,
        minWidth: 600,
        minHeight: 400,
        icon: path.join(__dirname, 'build', 'icon.ico'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });

    mainWindow.loadFile('index.html');
    return mainWindow;
}

function createMenu() {
    const template = [
        {
            label: '文件',
            submenu: [
                {
                    label: '新建笔记',
                    accelerator: 'Ctrl+N',
                    click: (item, focusedWindow) => {
                    if (focusedWindow) {
                        focusedWindow.webContents.executeJavaScript(
                            `try { createNewNote(); } catch(e) { console.error(e); }`
                        );
                    }
                }
            },
            {
                label: '保存',
                accelerator: 'Ctrl+S',
                click: (item, focusedWindow) => {
                    focusedWindow.webContents.executeJavaScript(
                        `try { saveNotes(); showToast('✅ 已保存'); } catch(e) {}`
                    );
                }
            },
            { type: 'separator' },
            {
                label: '退出',
                accelerator: 'Ctrl+W',
                role: 'close'
            }
        ]
    },
    {
        label: '编辑',
        submenu: [
            { label: '撤销', accelerator: 'Ctrl+Z', role: 'undo' },
            { label: '重做', accelerator: 'Ctrl+Y', role: 'redo' },
            { type: 'separator' },
            { label: '剪切', accelerator: 'Ctrl+X', role: 'cut' },
            { label: '复制', accelerator: 'Ctrl+C', role: 'copy' },
            { label: '粘贴', accelerator: 'Ctrl+V', role: 'paste' },
            { label: '全选', accelerator: 'Ctrl+A', role: 'selectall' }
        ]
    },
    {
        label: '查看',
        submenu: [
            {
                label: '搜索',
                accelerator: 'Ctrl+F',
                click: (item, focusedWindow) => {
                    focusedWindow.webContents.executeJavaScript(
                        `try { document.getElementById('searchBox').focus(); } catch(e) {}`
                    );
                }
            },
            {
                label: '放大',
                accelerator: 'Ctrl+=',
                role: 'zoomIn'
            },
            {
                label: '缩小',
                accelerator: 'Ctrl+-',
                role: 'zoomOut'
            },
            { type: 'separator' },
            {
                label: '刷新',
                accelerator: 'F5',
                role: 'reload'
            },
            {
                label: '开发者工具',
                accelerator: 'F12',
                role: 'toggleDevTools'
            },
            { type: 'separator' },
            {
                label: '专注模式',
                accelerator: 'Ctrl+Shift+F',
                click: (item, focusedWindow) => {
                    focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
                }
            }
        ]
    },
    {
        label: '工具',
        submenu: [
            {
                label: '番茄钟',
                accelerator: 'Ctrl+T',
                click: (item, focusedWindow) => {
                    focusedWindow.webContents.executeJavaScript(
                        `try { togglePomodoro(); } catch(e) {}`
                    );
                }
            },
            {
                label: '打印当前笔记',
                accelerator: 'Ctrl+P',
                click: (item, focusedWindow) => {
                    focusedWindow.webContents.executeJavaScript(
                        `try { window.print(); } catch(e) {}`
                    );
                }
            }
        ]
    },
    {
        label: '帮助',
        submenu: [
            {
                label: '快捷键',
                click: (item, focusedWindow) => {
                    focusedWindow.webContents.executeJavaScript(
                        `try { showShortcuts(); } catch(e) { alert('快捷键: Ctrl+N 新建 | Ctrl+S 保存 | Ctrl+F 搜索 | F12 开发者工具'); }`
                    );
                }
            },
            { type: 'separator' },
            {
                label: '关于 QuickNotes',
                click: () => {
                    dialog.showMessageBox({
                        title: '关于 QuickNotes',
                        message: 'QuickNotes 笔记 v1.0.0',
                        detail: '一个简洁的本地笔记软件\n\n版本: 1.0.0\n\n本地保存: Electron + HTML5\n\n数据存储: 浏览器 localStorage',
                        type: 'info'
                    });
                }
            }
        ]
    }];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
    createMainWindow();
    createMenu();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
