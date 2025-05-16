        // 文件数据 - 你可以修改这里来添加你的文件
        const files = [
            {
                name: "示例文档.pdf",
                size: "2.4 MB",
                date: "2023-05-15",
                downloads: 1245,
                url: "https://example.com/files/sample.pdf",
                type: "pdf"
            },
            {
                name: "软件安装包.exe",
                size: "45.7 MB",
                date: "2023-06-02",
                downloads: 892,
                url: "https://example.com/files/software.exe",
                type: "exe"
            },
            {
                name: "高清图片合集.zip",
                size: "156 MB",
                date: "2023-04-28",
                downloads: 567,
                url: "https://example.com/files/images.zip",
                type: "zip"
            },
            {
                name: "学习资料.docx",
                size: "8.1 MB",
                date: "2023-05-30",
                downloads: 1023,
                url: "https://example.com/files/document.docx",
                type: "word"
            },
            {
                name: "演示视频.mp4",
                size: "256 MB",
                date: "2023-06-10",
                downloads: 432,
                url: "https://example.com/files/video.mp4",
                type: "video"
            },
            {
                name: "源代码.tar.gz",
                size: "12.3 MB",
                date: "2023-06-05",
                downloads: 789,
                url: "https://example.com/files/code.tar.gz",
                type: "code"
            }
        ];

        // 文件类型对应的图标
        const fileIcons = {
            pdf: "fa-file-pdf",
            exe: "fa-file-code",
            zip: "fa-file-archive",
            word: "fa-file-word",
            video: "fa-file-video",
            code: "fa-file-code",
            default: "fa-file"
        };

        // 渲染文件列表
        function renderFileList(filteredFiles = files) {
            const fileListElement = document.getElementById('fileList');
            fileListElement.innerHTML = '';

            if (filteredFiles.length === 0) {
                fileListElement.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">没有找到匹配的文件</p>';
                return;
            }

            filteredFiles.forEach(file => {
                const fileType = file.type || 'default';
                const iconClass = fileIcons[fileType] || fileIcons.default;

                const fileCard = document.createElement('div');
                fileCard.className = 'file-card';
                fileCard.innerHTML = `
                    <div class="file-icon">
                        <i class="fas ${iconClass}"></i>
                    </div>
                    <div class="file-name">${file.name}</div>
                    <div class="file-info">
                        <span><i class="fas fa-database"></i> ${file.size}</span>
                        <span><i class="fas fa-calendar-alt"></i> ${file.date}</span>
                        <span><i class="fas fa-download"></i> ${file.downloads}</span>
                    </div>
                    <a href="${file.url}" class="download-btn" download>
                        <i class="fas fa-download"></i> 下载
                    </a>
                `;
                fileListElement.appendChild(fileCard);
            });
        }

        // 搜索功能
        document.getElementById('searchBtn').addEventListener('click', searchFiles);
        document.getElementById('searchInput').addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                searchFiles();
            }
        });

        function searchFiles() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const filteredFiles = files.filter(file => 
                file.name.toLowerCase().includes(searchTerm)
            );
            renderFileList(filteredFiles);
        }

        // 初始化渲染
        renderFileList();