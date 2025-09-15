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
          <router-link to="/" class="back-btn">
            <i class="fas fa-arrow-left"></i> 返回列表
          </router-link>
          <h1>文件详情</h1>
          <div></div>
        </div>
      </div>
    </header>

    <!-- 错误提示悬浮窗 -->
    <div v-if="errorVisibleSmall" class="card">
      <div class="icon-container">
        <svg viewBox="0 0 512 512" class="icon">
          <path
            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
          />
        </svg>
      </div>
      <div class="message-text-container">
        <p class="message-text">发生错误</p>
        <p class="sub-text">{{ errorMessage }}</p>
      </div>
      <svg viewBox="0 0 15 15" class="cross-icon" @click="offError">
        <path
          fill="currentColor"
          d="M11.78 4.03c.22-.22.22-.58 0-.8a.57.57 0 0 0-.81 0L7.5 6.69 4.03 3.22a.57.57 0 0 0-.81 0c-.22.22-.22.58 0 .8L6.69 7.5l-3.47 3.47c-.22.22-.22.58 0 .8.22.22.58.22.81 0L7.5 8.31l3.47 3.47c.22.22.58.22.81 0 .22-.22.22-.58 0-.8L8.31 7.5l3.47-3.47z"
        />
      </svg>
    </div>

    <!-- 错误提示窗口 -->
    <div class="notifications-container" v-if="errorVisible">
      <div class="error-alert">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="error-svg" viewBox="0 0 20 20">
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.7 7.3a1 1 0 00-1.4 1.4L8.6 10l-1.3 1.3a1 1 0 101.4 1.4L10 11.4l1.3 1.3a1 1 0 001.4-1.4L11.4 10l1.3-1.3a1 1 0 00-1.4-1.4L10 8.6 8.7 7.3z"
              />
            </svg>
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
              <div class="file-meta"><span>大小: {{ fileSize }} KIB</span></div>
            </div>
            <a :href="downloadUrl" download>
              <button class="download-btn">
                <i class="fas fa-download"></i> 下载
              </button>
            </a>
            <a :href="sourceUrl">
              <button class="download-btn">
                <i class="fas fa-file-code"></i> 源代码
              </button>
            </a>
          </div>

          <div class="section">
            <h3 class="section-title">
              <i class="fas fa-info-circle"></i> 文件介绍
            </h3>
            <div class="file-description" v-html="introduceHtml"></div>
          </div>

          <div class="section">
            <h3 class="section-title">
              <i class="fas fa-history"></i> 历史版本
            </h3>
            <ul class="version-list">
              <li class="version-item" v-for="v in versions" :key="v">
                <div class="version-info">
                  <div class="version-number">{{ v }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="sidebar">
          <div class="creator-card">
            <h3 class="section-title"><i class="fas fa-user"></i> 创作者</h3>
            <div class="creator-info">
              <img :src="avatar" alt="创作者头像" class="creator-avatar" />
              <div><h4 class="creator-name">{{ authorName }}</h4></div>
            </div>
            <div class="creator-bio"><p>{{ authorBio }}</p></div>
          </div>
          <div class="stats-card">
            <h3 class="section-title"><i class="fas fa-chart-bar"></i> 统计信息</h3>
            <div class="stat-item">
              <span class="stat-label">文件大小</span>
              <span class="stat-value">{{ fileSize }} KIB</span>
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
      sourceUrl: "",
    };
  },
  methods: {
    offError() {
      this.errorVisibleSmall = false;
    },

    async fetchData() {
      try {
        const { id } = this.$route.params;
        if (!id) {
          this.throwError("未检测到参数");
          return;
        }
        this.filename = id;

        // 1) README.md
        const readmeUrl = `/readme/control/${id}/README.md`;
        const readmeRes = await fetch(readmeUrl);
        if (!readmeRes.ok) {
          // 把 response body 打印到控制台以便调试
          const body = await readmeRes.text().catch(() => "");
          console.warn(`[ControlDetail] README.md 请求失败：`, readmeUrl, readmeRes.status, body);
          throw new Error(`未找到 README.md：${readmeUrl} （HTTP ${readmeRes.status}）`);
        }
        const readmeText = await readmeRes.text();
        const readmeCT = (readmeRes.headers.get("content-type") || "").toLowerCase();

        // 如果服务端返回的是 HTML（例如 SPA index.html 被返回）——提示并不直接渲染头部标签
        if (
          readmeCT.includes("text/html") ||
          /<!doctype|<html|<meta\s+charset|<head/i.test(readmeText)
        ) {
          console.warn("[ControlDetail] README.md 返回看起来是 HTML（可能是 index.html），内容已被记录到控制台。");
          console.debug(readmeText);
          this.introduceHtml =
            `<p style="color:#b33">未能正确加载 README.md（服务器返回 HTML）。</p>` +
            `<p>请检查：<code>public/readme/control/${id}/README.md</code> 是否存在，或路径/大小写是否匹配。</p>`;
        } else {
          this.introduceHtml = marked.parse(readmeText || "");
        }

        // 2) information.json
        const infoUrl = `/information/control/${id}/information.json`;
        const infoRes = await fetch(infoUrl);
        if (!infoRes.ok) {
          const body = await infoRes.text().catch(() => "");
          console.warn(`[ControlDetail] information.json 请求失败：`, infoUrl, infoRes.status, body);
          throw new Error(`未找到 information.json：${infoUrl} （HTTP ${infoRes.status}）`);
        }
        const jsonData = await infoRes.json();

        // 3) 计算控件体积（使用 blob.size 更可靠）
        const controlUrl = `/control/${id}/control.jsx`;
        const controlRes = await fetch(controlUrl);
        if (!controlRes.ok) {
          const body = await controlRes.text().catch(() => "");
          console.warn(`[ControlDetail] control.jsx 请求失败：`, controlUrl, controlRes.status, body);
          throw new Error(`未找到控件文件：${controlUrl} （HTTP ${controlRes.status}）`);
        }
        // 使用 blob 获取真实字节长度（兼容 dev server / 静态托管）
        const controlBlob = await controlRes.blob();
        const sizeKB = (controlBlob.size / 1024).toFixed(2);
        this.fileSize = sizeKB;

        // 4) Github 创作者信息（如果 author 字段存在）
        if (jsonData && jsonData.author) {
          try {
            const creatorRes = await fetch(`https://api.github.com/users/${jsonData.author}`);
            if (creatorRes.ok) {
              const creator = await creatorRes.json();
              this.avatar = creator.avatar_url;
              this.authorName = creator.name || jsonData.author;
              this.authorBio = creator.bio;
            } else {
              console.warn("[ControlDetail] 无法获取 Github 用户信息：", creatorRes.status);
              this.authorName = jsonData.author;
            }
          } catch (err) {
            console.warn("[ControlDetail] 获取 Github 信息失败：", err);
            this.authorName = jsonData.author;
          }
        }

        // 填充下载地址与版本
        this.downloadUrl = `/control/${id}/control.jsx`;
        this.sourceUrl = this.downloadUrl;
        this.versions = Array.isArray(jsonData.Version_number_list) ? jsonData.Version_number_list : [];

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
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>

<style>
@import "@/assets/css/style.css";
@import "@/assets/css/error.css";
</style>
