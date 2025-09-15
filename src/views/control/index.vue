<template>
  <div>
    <!-- 加载动画 -->
    <div class="progress-container" v-if="loading">
      <div class="progress-bar"></div>
    </div>

    <!-- 顶部导航栏 -->
    <header>
      <div class="container">
        <div class="header-content">
          <a href="../index.html" class="back-btn">
            <i class="fas fa-arrow-left"></i> 返回列表
          </a>
          <h1>文件详情</h1>
          <div></div>
        </div>
      </div>
    </header>

    <!-- 错误提示悬浮窗 -->
    <br v-if="errorVisibleSmall"/>
    <div v-if="errorVisibleSmall" class="card">
      <svg class="wave" viewBox="0 0 1440 320">
        <path d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64Z"/>
      </svg>
      <div class="icon-container">
        <svg viewBox="0 0 512 512" class="icon"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"></path></svg>
      </div>
      <div class="message-text-container">
        <p class="message-text">发生错误</p>
        <p class="sub-text">{{ errorMessage }}</p>
      </div>
      <svg viewBox="0 0 15 15" class="cross-icon" @click="offError">
        <path fill="currentColor" d="M11.78 4.03c.22-.22.22-.58 0-.8a.57.57 0 0 0-.81 0L7.5 6.69 4.03 3.22a.57.57 0 0 0-.81 0c-.22.22-.22.58 0 .8L6.69 7.5l-3.47 3.47c-.22.22-.22.58 0 .8.22.22.58.22.81 0L7.5 8.31l3.47 3.47c.22.22.58.22.81 0 .22-.22.22-.58 0-.8L8.31 7.5l3.47-3.47z"/>
      </svg>
    </div>

    <!-- 错误提示窗口 -->
    <br v-if="errorVisible"/>
    <div class="notifications-container" v-if="errorVisible">
      <div class="error-alert">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="error-svg" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.7 7.3a1 1 0 00-1.4 1.4L8.6 10l-1.3 1.3a1 1 0 101.4 1.4L10 11.4l1.3 1.3a1 1 0 001.4-1.4L11.4 10l1.3-1.3a1 1 0 00-1.4-1.4L10 8.6 8.7 7.3z"/></svg>
          </div>
          <div class="error-prompt-container">
            <p class="error-prompt-heading">发生错误</p>
            <ul class="error-prompt-list">
              <li>{{ errorMessage }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 文件信息 -->
    <div class="container" v-if="!errorVisible && !loading">
      <div class="file-detail-container">
        <div class="main-content">
          <div class="file-header">
            <div class="file-icon"><i class="fas fa-file-code"></i></div>
            <div class="file-title">
              <h2 class="file-name">{{ filename }}</h2>
              <div class="file-meta"><span>大小: {{ fileSize }}KIB</span></div>
            </div>
            <a :href="downloadUrl" download><button class="download-btn"><i class="fas fa-download"></i> 下载</button></a>
            <a :href="sourceUrl"><button class="download-btn"><i class="fas fa-file-code"></i> 源代码</button></a>
          </div>

          <div class="section">
            <h3 class="section-title"><i class="fas fa-info-circle"></i> 文件介绍</h3>
            <div class="file-description" v-html="introduceHtml"></div>
          </div>

          <div class="section">
            <h3 class="section-title"><i class="fas fa-history"></i> 历史版本</h3>
            <ul class="version-list">
              <li class="version-item" v-for="v in versions" :key="v">
                <div class="version-info"><div class="version-number">{{ v }}</div></div>
              </li>
            </ul>
          </div>
        </div>

        <div class="sidebar">
          <div class="creator-card">
            <h3 class="section-title"><i class="fas fa-user"></i> 创作者</h3>
            <div class="creator-info">
              <img :src="avatar" alt="创作者头像" class="creator-avatar">
              <div><h4 class="creator-name">{{ authorName }}</h4></div>
            </div>
            <div class="creator-bio"><p>{{ authorBio }}</p></div>
          </div>
          <div class="stats-card">
            <h3 class="section-title"><i class="fas fa-chart-bar"></i> 统计信息</h3>
            <div class="stat-item"><span class="stat-label">文件大小</span><span class="stat-value">{{ fileSize }}KIB</span></div>
            <div class="stat-item"><span class="stat-label">文件类型</span><span class="stat-value">JSX</span></div>
          </div>
        </div>
      </div>
    </div>

    <footer><div class="container"><p>© 2025 小圳社区 - CoCo-Community | 所有文件仅供学习交流使用</p></div></footer>
  </div>
</template>

<script>
import { marked } from "marked";

export default {
  name: "ControlDetail",
  data() {
    return {
      loading: true,
      errorVisible: false,
      errorVisibleSmall: false,
      errorMessage: "",
      filename: "",
      fileSize: "正在加载",
      versions: [],
      introduceHtml: "<p>正在处理</p>",
      avatar: "",
      authorName: "正在加载",
      authorBio: "正在加载",
      downloadUrl: "",
      sourceUrl: ""
    };
  },
  methods: {
    offError() {
      this.errorVisibleSmall = false;
    },
    async fetchData() {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        let filename = urlParams.get("name");
        if (!filename) {
          const pathMatch = window.location.pathname.match(/\/control\/([^\/\?]+)/);
          if (pathMatch && pathMatch[1]) filename = decodeURIComponent(pathMatch[1]);
        }
        if (!filename || filename === "index.html" || filename === "name" || filename === ":name") {
          this.throwError("未检测到参数");
          return;
        }

        this.filename = filename;

        const introduce = await fetch(`${filename}/README.md`).then(r=>r.ok?r.text():Promise.reject(r));
        this.introduceHtml = marked.parse(introduce);

        const jsonData = await fetch(`${filename}/information.json`).then(r=>r.json());
        const version = jsonData.Version_number_list.at(-1);

        const controlRes = await fetch(`${filename}/${version}/control.jsx`);
        const size = (Number(controlRes.headers.get("Content-Length"))/1024).toFixed(2);
        this.fileSize = size;

        const creator = await fetch(`https://api.github.com/users/${jsonData.author}`).then(r=>r.json());
        this.avatar = creator.avatar_url;
        this.authorName = creator.name;
        this.authorBio = creator.bio;

        this.downloadUrl = `https://cc.zitzhen.cn/control/${filename}/${version}/control.jsx`;
        this.sourceUrl = this.downloadUrl;
        this.versions = jsonData.Version_number_list;
      } catch (e) {
        console.error("加载内容出错:", e);
        this.throwError(e.message || "未知错误");
      } finally {
        this.loading = false;
      }
    },
    throwError(msg) {
      this.errorMessage = msg;
      this.errorVisible = true;
      this.errorVisibleSmall = true;
      this.loading = false;
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
@import "@/assets/css/style.css";
@import "@/assets/css/error.css";
</style>
