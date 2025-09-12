<template>
  <div>
    <header>
      <div class="container">
        <h1>ZIT-CoCo-Community隐私政策</h1>
        <p>请仔细阅读此隐私政策</p>
      </div>
    </header>
  </div>
   <div class="container" id="avatar">
        <!-- 用户信息头部 -->
        <div class="profile-header">
            <img src="" alt="用户头像" class="avatar" id="avatar_img">
            <div class="user-info">
                <h1 id="user_name">正在加载</h1>
                <!--用户GitHub名称-->
                <p id="user_introduction">正在加载</p>
                <!--用户GitHub介绍-->
                <div class="stats">

                    <!--
                    <div class="stat-item">
                        <div class="stat-number">正在加载</div>
                        <div class="stat-label">文章</div>
                    </div>
                    -->

                    <div class="stat-item">
                        <div class="stat-number" id="number_of_controls">正在加载</div>
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
    background-color: #3498db;
    color: white;
    padding: 1.5rem 0;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.container {
    max-width: 1200px;
    margin: 2rem auto;
}
</style>