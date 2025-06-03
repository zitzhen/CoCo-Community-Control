function not_github(){
    github_error.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const Loading_text = document.getElementById('Loading_text');
    const Loading =document.getElementById('Loading');
    const github_error = document.getElementById("github_error");
    if (window.location.origin.includes("github.io")){
        not_github();
    }

            // 文件数据
        const files = [];

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
                    <!--
                    <div class="file-info">
                        <span><i class="fas fa-database"></i> ${file.size}</span>
                        <span><i class="fas fa-calendar-alt"></i> ${file.date}</span>
                        <span><i class="fas fa-download"></i> ${file.downloads}</span>
                    </div>
                    -->
                    <a href="${file.url}" class="download-btn">
                        <i class="fas fa-download"></i> 去详情页面
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



async function getSubDirs(owner, repo, path = 'control') {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  
  try {
    const { data } = await axios.get(url);
    let dirs = data.filter(item => item.type === "dir").map(item => item.name);
    // 过滤掉 CS 和 JS 文件夹
    dirs = dirs.filter(name => name !== 'css' && name !== 'js');
    console.log("Directories:", dirs);
    return dirs;
  } catch (error) {
    console.error("Error fetching directories:", error.response?.status || error.message);
    return [];
  }
}

getSubDirs('zitzhen', 'CoCo-Community', 'control').then(dirNames => {
    const fileObjs = dirNames.map(name => ({
        name: name,
        type: "code",
        size: "未知",
        date: "未知",
        downloads: "未知",
        url:  window.location.origin + `/control/${name}`
    }));

    files.length = 0; // 清空原有内容
    files.push(...fileObjs); // 更新全局 files 数组

    renderFileList(fileObjs);
    Loading_text.style.display = 'none';
    Loading.style.display = 'none';
});
});