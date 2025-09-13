<template>
  <div>
    <header>
      <div class="container">
        <h1>ZIT-CoCo-Community</h1>
      </div>
    </header>
  </div>
   <div class="container" id="avatar">
        <!-- 用户信息头部 -->
        <div class="profile-header">
            <img :src="avatar" alt="用户头像" class="avatar" id="avatar_img">
            <div class="user-info">
                <h1 id="user_name">{{Nickname}}</h1>
                <!--用户GitHub名称-->
                <p id="user_introduction">{{ bio }}</p>
                <!--用户GitHub介绍-->
                <div class="stats">

                    <!--
                    <div class="stat-item">
                        <div class="stat-number">正在加载</div>
                        <div class="stat-label">文章</div>
                    </div>
                    -->

                    <div class="stat-item">
                        <div class="stat-number" id="number_of_controls">{{ Control_number }}</div>
                        <div class="stat-label">控件</div>
                    </div>
                    <!--
                    <div class="stat-item">
                        <div class="stat-number">5.2k</div>
                        <div class="stat-label">粉丝</div>
                    </div>
                    -->
                </div>
            </div>
        </div>
        
        <!-- 标签导航 -->
        <div class="tabs">
            <div class="tab active" data-tab="files">控件</div>
            <div class="tab" data-tab="articles">文章</div>
        </div>
        
        <!-- 文件板块 -->
        <div class="tab-content active" id="files">
            <h2 class="section-title">TA的控件</h2>
            
            <div class="file-list" id="display_controls">
                <p id="control_processing">请稍后，我们正在处理数据……</p>
            </div>
        </div>
        
        <!-- 文章板块 -->
        <div class="tab-content" id="articles">
            <h2 class="section-title">TA的文章</h2>
            
            <div class="article-list">
                <!-- 文章卡片示例 - 实际应用中这里应该是动态生成的 -->
                <p>文章功能正在开发中</p>
            </div>
        </div>
    </div>

        <footer>
          <div class="container">
              <p>© 2025 小圳社区 - CoCo自定义控件下载中心 | 所有文件仅供学习交流使用</p>
          </div>
      </footer>
</template>

<style scoped>
header {
    background-color: var(--primary-color);
    color: white;
    padding: 1.5rem 0;
    text-align: center;
    box-shadow: var(--shadow);
}
.container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
}
:root{
    --primary-color: #3498db;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
}


.profile-header {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 30px;
    border: 3px solid #f0f0f0;
}

.user-info h1 {
    font-size: 28px;
    margin-bottom: 10px;
    color: #333;
}

.user-info p {
    color: #666;
    margin-bottom: 15px;
}

.stats {
    display: flex;
    gap: 20px;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 20px;
    font-weight: bold;
    color: #2c3e50;
}

.stat-label {
    font-size: 14px;
    color: #7f8c8d;
}

.tabs {
    display: flex;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
}

.tab {
    padding: 12px 25px;
    cursor: pointer;
    font-weight: 600;
    color: #7f8c8d;
    transition: all 0.3s ease;
    border-bottom: 3px solid transparent;
}

.tab.active {
    color: #3498db;
    border-bottom: 3px solid #3498db;
}

.tab:hover:not(.active) {
    color: #555;
    background-color: #f9f9f9;
}

.tab-content {
    display: none;
    background-color: #fff;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.tab-content.active {
    display: block;
}

.section-title {
    font-size: 22px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    color: #2c3e50;
}

/* 文章列表样式 */
.article-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.article-card {
    border: 1px solid #eee;
    border-radius: 6px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.article-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.article-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.article-content {
    padding: 15px;
}

.article-title {
    font-size: 18px;
    margin-bottom: 10px;
    color: #2c3e50;
}

.article-excerpt {
    color: #666;
    font-size: 14px;
    margin-bottom: 15px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.article-meta {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #95a5a6;
}

/* 文件列表样式 */
.file-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
}

.file-card {
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 6px;
    transition: all 0.3s ease;
}

.file-card:hover {
    background-color: #f0f0f0;
}

.file-icon {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e1f0fa;
    border-radius: 4px;
    color: #3498db;
    font-size: 20px;
}

.file-info {
    flex: 1;
}

.file-name {
    font-weight: 600;
    margin-bottom: 5px;
    color: #2c3e50;
}

.file-meta {
    font-size: 12px;
    color: #95a5a6;
}

.file-actions {
    margin-left: 10px;
}

.download-btn {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    transition: background-color 0.3s;
}

.download-btn:hover {
    background-color: #2980b9;
}

/* 空状态提示 */
.empty-state {
    text-align: center;
    padding: 50px 20px;
    color: #95a5a6;
}

.empty-state i {
    font-size: 50px;
    margin-bottom: 20px;
    color: #bdc3c7;
}

.empty-state p {
    font-size: 16px;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .profile-header {
        flex-direction: column;
        text-align: center;
    }
    
    .avatar {
        margin-right: 0;
        margin-bottom: 20px;
    }
    
    .stats {
        justify-content: center;
    }
    
    .tabs {
        justify-content: center;
    }
    
    .article-list, .file-list {
        grid-template-columns: 1fr;
    }
}
footer {
    text-align: center;
    padding: 2rem 0;
    margin-top: 2rem;
    color: #666;
    border-top: 1px solid #eee;
}
</style>

<script>
    function getCurrentUrlLastSegment() {
        // 获取当前页面的完整URL
        const currentUrl = window.location.href;
        
        // 移除末尾的斜杠（如果存在）
        const cleanedUrl = currentUrl.endsWith('/') ? currentUrl.slice(0, -1) : currentUrl;
        
        // 创建URL对象
        const url = new URL(cleanedUrl);
        
        // 获取路径名并分割成段
        const pathSegments = url.pathname.split('/').filter(segment => segment !== '');
        
        // 返回最后一个路径段（如果存在）
        return pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : '';
    }

    async function fetch_github_information(username) {
        try{
            const url = `https://api.github.com/users/${username}`;
            const response = await fetch(url);
            if (!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.text();
            return data;
        }catch(error){
            console.log(error);
        }
    }

    async function fetch_user_information(username) {
        try{
            const url = `../information/user/${username}.json`
            const response = await fetch(url);
            if (!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = response.json;
            return data;
        }catch(error){
            console.log(error);
        }
    }

    function render_information(information){
        const name = information.name;
        const bio =information.bio;
        const avatar =information.avatar_url;

        export default {
        data() {
            return {
            Nickname: name,
            bio: bio,
            avatar:avatar
            };
        }
        };
    }

    function main(){
        const username = getCurrentUrlLastSegment();
        const user_github_information = fetch_github_information(username);
        const user_introduction = fetch_user_information(username);
        render_information(user_introduction);
    }
    
</script>