<template>
  <div class="control-detail-page">
    <!-- 加载动画 -->
    <div class="progress-container" v-show="loading">
      <div class="progress-bar"></div>
    </div>

    <!-- 错误提示 (小窗口) -->
    <br v-if="showError" id="error_prompt_small_windows_br">
    <div v-if="showError" id="error_prompt_small_windows">
      <div class="card">
        <svg class="wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z" fill-opacity="1"></path>
        </svg>
        <div class="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="0" fill="currentColor" stroke="currentColor" class="icon">
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"></path>
          </svg>
        </div>
        <div class="message-text-container">
          <p class="message-text" id="Error_message_text">发生错误</p>
          <p class="sub-text" id="Something_went_wrong_text">{{ errorMessage || '请稍后，正在加载错误信息' }}</p>
        </div>
        <button @click="offErrorButton" style="background: none; border: none; padding: 0; pointer-events: none;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" stroke-width="0" fill="none" stroke="currentColor" style="pointer-events: auto; opacity: 1;" class="cross-icon">
            <path fill="currentColor" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" clip-rule="evenodd" fill-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- 错误提示 (大窗口) -->
    <br v-if="showError" id="error_windows_br">
    <div v-if="showError" id="error_windows" class="notifications-container">
      <div class="error-alert">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="error-svg">
              <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fill-rule="evenodd"></path>
            </svg>
          </div>
          <div class="error-prompt-container">
            <p class="error-prompt-heading">发生错误</p>
            <div class="error-prompt-wrap">
              <ul class="error-prompt-list" role="list">
                <li id="error_prompt_text_one">{{ errorDetails || '请检查参数中的文件名是否正确' }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 主内容区域 -->
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
    </header>

    <div v-if="!loading && !showError" class="container" id="File_Information">
      <div class="file-detail-container">
        <div class="main-content">
          <div class="file-header">
            <div class="file-icon">
              <i class="fas fa-file-code"></i>
            </div>
            <div class="file-title">
              <h2 class="file-name" id="file_name">{{ fileName || '正在加载' }}</h2>
              <div class="file-meta">
                <span id="size">大小: {{ fileSize || '正在加载' }}</span> 
              </div>
            </div>
            <a :href="downloadUrl" download id="download">
              <button class="download-btn">
                <i class="fas fa-download"></i> 下载
              </button>
            </a>

            <a :href="sourceUrl" id="source">
              <button class="download-btn">
                <i class="fas fa-file-code"></i> 源代码
              </button>
            </a>
          </div>

          <div class="section">
            <h3 class="section-title">
              <i class="fas fa-info-circle"></i> 文件介绍
            </h3>
            <div class="file-description HTML_explanatory_text" id="presentation_of_the_document" v-html="fileDescription"></div>
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
              <img :src="creatorAvatar" alt="创作者头像" class="creator-avatar" id="avatar_src">
              <div>
                <h4 class="creator-name" id="HTML_author_name">{{ creatorName || '正在加载' }}</h4>
              </div>
            </div>
            <div class="creator-bio">
              <p id="HTML_bio">{{ creatorBio || '正在加载' }}</p>
            </div>
          </div>

          <div class="stats-card">
            <h3 class="section-title">
              <i class="fas fa-chart-bar"></i> 统计信息
            </h3>
            <div class="stat-item">
              <span class="stat-label">文件大小</span>
              <span class="stat-value" id="size2">{{ fileSize || '正在加载' }}</span>
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
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'ControlDetail',
  setup() {
    const route = useRoute();
    
    // 响应式数据
    const loading = ref(true);
    const showError = ref(false);
    const errorMessage = ref('');
    const errorDetails = ref('');
    const fileName = ref('');
    const fileSize = ref('');
    const fileDescription = ref('<p>正在处理</p>');
    const creatorAvatar = ref('');
    const creatorName = ref('');
    const creatorBio = ref('');
    const downloadUrl = ref('');
    const sourceUrl = ref('');
    const controlData = ref(null);
    
    // 计算属性
    const filename = computed(() => {
      // 优先从查询参数获取，否则从路径获取
      let name = route.query.name;
      if (!name) {
        const pathMatch = route.path.match(/\/control\/([^\/\?]+)/);
        if (pathMatch && pathMatch[1]) {
          name = decodeURIComponent(pathMatch[1]);
        }
      }
      return name;
    });
    
    // 方法
    const newError = (error = '') => {
      console.error("触发错误");
      loading.value = false;
      showError.value = true;
      
      if (error) {
        errorMessage.value = "错误信息";
        errorDetails.value = "错误信息: " + error;
        document.title = "发生错误|ZIT-CoCo-Community";
        window.history.replaceState(null, "发生错误|ZIT-CoCo-Community", window.location.href);
      } else {
        errorMessage.value = '找不到文件';
        errorDetails.value = '请检查参数中的文件名是否正确';
        document.title = "404 not found|找不到控件|ZIT-CoCo-Community";
        window.history.replaceState(null, "404 not found|找不到控件|ZIT-CoCo-Community", window.location.href);
      }
    };
    
    const offErrorButton = () => {
      showError.value = false;
    };
    
    // 获取项目描述
    const getDescription = async (name) => {
      try {
        const response = await fetch(`${name}/README.md`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        return content;
      } catch (error) {
        console.error('请求出错:', error);
        newError(error);
        return '';
      }
    };
    
    // 获取配置文件
    const getJsonData = async (name) => {
      try {
        const url = `${name}/information.json`;
        const response = await fetch(url);  
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error('获取配置文件出错:', error);
        newError(error);  
        return null;
      }
    };
    
    // 获取控件
    const getControls = async (name, version) => {
      try {
        const url = `${name}/${version}/control.jsx`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        const size = response.headers.get('Content-Length');
        return {
          data: data,
          size: size
        };
      } catch (error) {
        console.error('获取控件出错:', error);
        newError(error);  
        return null;
      }
    };
    
    // 获取创作者信息
    const getCreatorInformation = async (id) => {
      try {
        const url = `https://api.github.com/users/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("获取Github创作者信息出错", error);
        newError(error);
        return null;
      }
    };
    
    // 生命周期钩子
    onMounted(async () => {
      // 检查是否提供了文件名参数
      if (!filename.value || filename.value === "index.html" || filename.value === "name" || filename.value === ":name") {
        console.error("无效参数");
        loading.value = false;
        showError.value = true;
        errorMessage.value = '未检测到参数';
        errorDetails.value = '请检查URL中的name参数';
        document.title = "400 Bad Request|错误请求|ZIT-CoCo-Community";
        window.history.replaceState(null, "400 Bad Request|错误请求|ZIT-CoCo-Community", window.location.href);
        return;
      }
      
      try {
        // 获取项目描述和配置数据
        const [introduce, jsonData] = await Promise.all([
          getDescription(filename.value),
          getJsonData(filename.value)
        ]);
        
        if (!jsonData) {
          throw new Error('无法获取控件配置信息');
        }
        
        // 获取控件数据和创作者信息
        const [controls, creatorInfo] = await Promise.all([
          getControls(filename.value, jsonData.Version_number_list[jsonData.Version_number_list.length - 1]),
          getCreatorInformation(jsonData.author)
        ]);
        
        if (!controls || !creatorInfo) {
          throw new Error('无法获取控件或创作者信息');
        }
        
        // 更新UI数据
        const size = (controls.size / 1024).toFixed(2);
        fileSize.value = `${size}KIB`;
        fileName.value = filename.value;
        fileDescription.value = window.marked.parse(introduce);
        creatorAvatar.value = creatorInfo.avatar_url;
        creatorName.value = creatorInfo.name || jsonData.author;
        creatorBio.value = creatorInfo.bio || '暂无简介';
        
        // 设置下载链接
        const latestVersion = jsonData.Version_number_list[jsonData.Version_number_list.length - 1];
        downloadUrl.value = `https://cc.zitzhen.cn/control/${filename.value}/${latestVersion}/control.jsx`;
        sourceUrl.value = `https://cc.zitzhen.cn/control/${filename.value}/${latestVersion}/control.jsx`;
        
        // 保存控件数据
        controlData.value = controls.data;
        
        // 加载完成
        loading.value = false;
        document.title = `${filename.value}|控件详情|ZIT-CoCo-Community`;
        window.history.replaceState(null, `${filename.value}|控件详情|ZIT-CoCo-Community`, window.location.href);
      } catch (error) {
        console.error('加载内容出错:', error);
        newError(error.message);
      }
    });
    
    return {
      loading,
      showError,
      errorMessage,
      errorDetails,
      fileName,
      fileSize,
      fileDescription,
      creatorAvatar,
      creatorName,
      creatorBio,
      downloadUrl,
      sourceUrl,
      offErrorButton
    };
  }
};
</script>

<style scoped>
/* 原style.css内容 */
:root {
  --primary-color: #3498db;
  --secondary-color: #2980b9;
  --background-color: #f5f7fa;
  --card-color: #ffffff;
  --text-color: #333333;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --border-color: #e1e4e8;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
  margin: 0;
  padding: 0;
}

header {
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 0;
  box-shadow: var(--shadow);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-btn {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

.back-btn i {
  margin-right: 5px;
}

h1 {
  margin: 0;
  font-size: 1.8rem;
}

.file-detail-container {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .file-detail-container {
    grid-template-columns: 1fr;
  }
}

.main-content {
  background-color: var(--card-color);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.file-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.file-icon {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-right: 1rem;
}

.file-title {
  flex: 1;
}

.file-name {
  font-weight: bold;
  font-size: 1.4rem;
  margin: 0;
}

.file-meta {
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.3rem;
}

.download-btn {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.download-btn:hover {
  background-color: var(--secondary-color);
}

.section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
}

.section-title i {
  margin-right: 8px;
  color: var(--primary-color);
}

.file-description {
  line-height: 1.7;
}

.file-description img {
  height: auto;  
  max-width: 500px;  
  width: auto;  
}

.version-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.version-item {
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.version-item:last-child {
  border-bottom: none;
}

.version-info {
  flex: 1;
}

.version-number {
  font-weight: bold;
}

.version-date {
  color: #666;
  font-size: 0.85rem;
  margin-top: 0.2rem;
}

.version-download {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 0.9rem;
}

.creator-card {
  background-color: var(--card-color);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.creator-info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.creator-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid var(--primary-color);
}

.creator-name {
  font-weight: bold;
  font-size: 1.1rem;
  margin: 0 0 0.3rem 0;
}

.creator-role {
  color: #666;
  font-size: 0.9rem;
}

.creator-bio {
  font-size: 0.9rem;
  line-height: 1.6;
}

.stats-card {
  background-color: var(--card-color);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.stat-item {
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--border-color);
}

.stat-item:last-child {
  border-bottom: none;
}

.stat-label {
  color: #666;
}

.stat-value {
  font-weight: bold;
}

.screenshots {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.screenshot {
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.screenshot img {
  width: 100%;
  height: auto;
  display: block;
}

footer {
  text-align: center;
  padding: 2rem 0;
  margin-top: 2rem;
  color: #666;
  border-top: 1px solid var(--border-color);
  font-size: 0.9rem;
}

/*
.HTML_explanatory_text{
  border: 1px solid rgba(0, 0, 0, 0.3);
}
/*/

/* 原error.css内容 */
/* 错误输入框 */ 
.notifications-container {
  width: 320px;
  height: auto;
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  width: 50%;
}

.flex {
  display: flex;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.error-alert {
  border-radius: 0.375rem;
  padding: 1rem;
  background-color: rgb(254 242 242);
}

.error-svg {
  color: #F87171;
  width: 1.25rem;
  height: 1.25rem;
}

.error-prompt-heading {
  color: #991B1B;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: bold;
}

.error-prompt-container {
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
}

.error-prompt-wrap {
  margin-top: 0.5rem;
  color: #B91C1C;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.error-prompt-list {
  padding-left: 1.25rem;
  margin-top: 0.25rem;
  list-style-type: disc;
}

/*/错误悬浮器/*/

.card {
  width: 330px;
  height: 80px;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 10px 15px;
  background-color: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
  margin: 0 auto;
  width: 50%;
}

.wave {
  position: absolute;
  transform: rotate(90deg);
  left: -31px;
  top: 32px;
  width: 80px;
  fill: #fc0c0c3a;
}

.icon-container {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fc0c0c48;
  border-radius: 50%;
  margin-left: 8px;
}

.icon {
  width: 17px;
  height: 17px;
  color: #d10d0d;
}

.message-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
}

.message-text,
.sub-text {
  margin: 0;
  cursor: default;
}

.message-text {
  color: #d10d0d;
  font-size: 17px;
  font-weight: 700;
}

.sub-text {
  font-size: 14px;
  color: #555;
}

.cross-icon {
  width: 18px;
  height: 18px;
  color: #555;
  cursor: pointer;
}

/* 加载动画样式 */
.progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: transparent;
  z-index: 9999;
}

.progress-bar {
  height: 100%;
  background-color: var(--primary-color);
  animation: progress 1.5s infinite ease-in-out;
}

@keyframes progress {
  0% {
    width: 0%;
    margin-left: 0;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 0%;
    margin-left: 100%;
  }
}
</style>