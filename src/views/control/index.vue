<template>
    <header>
    <div class="container" id="Navigation_bar">
        <div class="header-content">
            <a href="../index.html" class="back-btn">
                <i class="fas fa-arrow-left"></i> 返回列表
            </a>
            <h1>文件详情</h1>
            <div></div> <!-- 空div用于保持布局平衡 -->
        </div>
    </div>
       <div class="container" id="File_Information">
        <div class="file-detail-container">
            <div class="main-content">
                <div class="file-header">
                    <div class="file-icon">
                        <i class="fas fa-file-code"></i>
                    </div>
                    <div class="file-title">
                        <h2 class="file-name" id="file_name">{{ name }}</h2>
                        <div class="file-meta">
                            <span id="size">大小: {{ size }}</span> 
                        </div>
                    </div>
                    <a :href="downloadurl" download id="download">
                        <button class="download-btn">
                            <i class="fas fa-download"></i> 下载
                        </button>
                    </a>

                    <a :href="code"   id="source">
                        <button class="download-btn">
                            <i class="fas fa-file-code"></i> 源代码
                        </button>
                    </a>
                </div>

                <div class="section">
                    <h3 class="section-title">
                        <i class="fas fa-info-circle"></i> 文件介绍
                    </h3>
                    <div class="file-description  HTML_explanatory_text" id="presentation_of_the_document">
                        <div v-html="READMEHTML"></div>
                    </div>
                </div>



                <div class="section">
                    <h3 class="section-title">
                        <i class="fas fa-history"></i> 历史版本
                    </h3>
                    <ul class="version-list">
                        <li class="version-item">
                            <div class="version-info">
                                <div class="version-number">历史记录关闭 </div>
                                <div class="version-date">历史记录关闭</div>
                            </div>
                            <a href="#" class="version-download">关闭</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="sidebar">
                <div class="creator-card">
                    <h3 class="section-title">
                        <i class="fas fa-user"></i> 创作者
                    </h3>
                    <div class="creator-info">
                        <img :src="avatarUrl" alt="创作者头像" class="creator-avatar" id="avatar_src">
                        <div>
                            <h4 class="creator-name" id="HTML_author_name">{{ README }}</h4>
                        </div>
                    </div>
                    <div class="creator-bio">
                        <p id="HTML_bio">{{ bio }}</p>
                    </div>
                </div>

                <div class="stats-card">
                    <h3 class="section-title">
                        <i class="fas fa-chart-bar"></i> 统计信息
                    </h3>
                    <div class="stat-item">
                        <span class="stat-label">文件大小</span>
                        <span class="stat-value" id="size2">{{ size }}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">文件类型</span>
                        <span class="stat-value">JSX</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <div class="container">
            <p>© 2025 小圳社区 - CoCo-Community | 所有文件仅供学习交流使用</p>
        </div>
    </footer>
</header>
</template>

<style>
@import url(../../assets/style/control/style.css);
</style>

<script>
export default{
    data(){
        return{
            name:"",
            bio:"",
            size:"",
            README:""
        };
    }
}
</script>