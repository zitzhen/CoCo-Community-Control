<script setup>
import { ref, onMounted } from 'vue';
import Navigation from '@/components/user/Navigation.vue';

const content = ref('');

function getLastPath() {
  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1] || "";
}

async function getuserinformation(username) {
  try {
    const response = await fetch(`/information/user/${username}.json`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('请求出错:', error);
  }
}

async function fetchgithub(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function loadData() {
  const username = getLastPath();
  const githubData = await fetchgithub(username);
  const userInfo = await getuserinformation(username);
  
  // 构建用户页面内容
  content.value = `
    <div class="container" id="avatar">
      <!-- 用户信息头部 -->
      <div class="profile-header">
        <img src="${githubData.avatar_url || ''}" alt="用户头像" class="avatar" id="avatar_img">
        <div class="user-info">
          <h1 id="user_name">${githubData.name || username}</h1>
          <!--用户GitHub名称-->
          <p id="user_introduction">${githubData.bio || ''}</p>
          <!--用户GitHub介绍-->
          <div class="stats">
            <div class="stat-item">
              <div class="stat-number" id="number_of_controls">${userInfo.controls || '正在加载'}</div>
              <div class="stat-label">控件</div>
            </div>
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
  `;
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <Navigation />
  <div id="co" v-html="content"></div>
</template>

<style scoped>
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
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
  -webkit-line-clamp: 3;
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

footer {
  text-align: center;
  padding: 2rem 0;
  margin-top: 2rem;
  color: #666;
  border-top: 1px solid #eee;
}
</style>