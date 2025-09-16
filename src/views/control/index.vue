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
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4 9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
      </div>
      <div class="message-text-container">
        <p class="message-text">发生错误</p>
        <p class="sub-text">{{ errorMessage }}</p>
      </div>
      <svg viewBox="0 0 15 15" class="cross-icon" @click="offError">
        <path fill="currentColor" d="M11.78 4.03c.22-.22.22-.58 0-.8a.57.57 0 0 0-.81 0L7.5 6.69 4.03 3.22a.57.57 0 0 0-.81 0c-.22.22-.22.58 0 .8L6.69 7.5l-3.47 3.47c-.22.22-.22.58 0 .8.22.22.58.22.81 0L7.5 8.31l3.47 3.47c.22.22.58.22.81 0 .22-.22.22-.58 0-.8L8.31 7.5l3.47-3.47z"/></svg>
    </div>

    <!-- 错误提示窗口 -->
    <div class="notifications-container" v-if="errorVisible">
      <div class="error-alert">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="error-svg" viewBox="0 0 20 20">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.7 7.3a1 1 0 00-1.4 1.4L8.6 10l-1.3 1.3a1 1 0 101.4 1.4L10 11.4l1.3 1.3a1 1 0 001.4-1.4L11.4 10l1.3-1.3a1 1 0 00-1.4-1.4L10 8.6 8.7 7.3z"/></svg>
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
              <button class="download-btn"><i class="fas fa-download"></i> 下载</button>
            </a>
            <a :href="sourceUrl">
              <button class="download-btn"><i class="fas fa-file-code"></i> 源代码</button>
            </a>
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
              <img :src="avatar" alt="创作者头像" class="creator-avatar" />
              <div><h4 class="creator-name">{{ authorName }}</h4></div>
            </div>
            <div class="creator-bio"><p>{{ authorBio }}</p></div>
          </div>
          <div class="stats-card">
            <h3 class="section-title"><i class="fas fa-chart-bar"></i> 统计信息</h3>
            <div class="stat-item"><span class="stat-label">文件大小</span><span class="stat-value">{{ fileSize }} KIB</span></div>
            <div class="stat-item"><span class="stat-label">文件类型</span><span class="stat-value">JSX</span></div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <div class="container"><p>© 2025 小圳社区 - CoCo-Community | 所有文件仅供学习交流使用</p></div>
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

    // README 候选（包含用户提供的正确路径 /information/readme/...）
    async fetchReadmeCandidate(id) {
      const candidates = [
        `/information/readme/control/${id}/README.md`,
        `/information/readme/control/${id}/readme.md`,
        `/information/readme/control/${id}/Readme.md`,
        `/information/readme/control/${id}/README.MD`,
        `/information/readme/control/${id}/README.markdown`,
        // 继续尝试其它常见位置（兼容旧结构）
        `/information/control/${id}/README.md`,
        `/information/control/${id}/readme.md`,
        `/readme/control/${id}/README.md`,
        `/readme/control/${id}/readme.md`,
      ];

      let firstHtml = null;

      for (const url of candidates) {
        try {
          const res = await fetch(url);
          const text = await res.text().catch(() => "");
          const ct = (res.headers.get("content-type") || "").toLowerCase();

          if (!res.ok) {
            console.debug("[ControlDetail] README 候选未命中：", url, res.status);
            continue;
          }

          // 如果返回的是 HTML（例如被 SPA fallback 成 index.html），跳过
          if (
            ct.includes("text/html") ||
            /<!doctype|<html|<meta\s+charset|<head|<body/i.test(text)
          ) {
            if (!firstHtml) firstHtml = { url, status: res.status, snippet: text.slice(0, 1024) };
            console.warn("[ControlDetail] README 返回 HTML（可能是 index.html）: ", url);
            continue;
          }

          // 命中 Markdown / 文本
          return { url, text };
        } catch (err) {
          console.warn("[ControlDetail] 请求 README 异常：", url, err);
          continue;
        }
      }

      return { error: true, firstHtml };
    },

    async fetchData() {
      try {
        const { id } = this.$route.params;
        if (!id) {
          this.throwError("未检测到参数");
          return;
        }
        this.filename = id;

        // 1) information.json（先拿到版本与 author）
        const infoUrl = `/information/control/${id}/information.json`;
        const infoRes = await fetch(infoUrl);
        if (!infoRes.ok) {
          const body = await infoRes.text().catch(() => "");
          console.warn("[ControlDetail] information.json 错误响应：", infoUrl, infoRes.status, body.slice?.(0,500));
          throw new Error(`未找到 information.json：${infoUrl} （HTTP ${infoRes.status}）`);
        }
        const jsonData = await infoRes.json();

        // 2) 控件文件（计算大小）
        const controlUrl = `/control/${id}/control.jsx`;
        const controlRes = await fetch(controlUrl);
        if (!controlRes.ok) {
          const body = await controlRes.text().catch(() => "");
          console.warn("[ControlDetail] control.jsx 错误响应：", controlUrl, controlRes.status, body.slice?.(0,500));
          throw new Error(`未找到控件文件：${controlUrl} （HTTP ${controlRes.status}）`);
        }
        const controlBlob = await controlRes.blob();
        this.fileSize = (controlBlob.size / 1024).toFixed(2);

        // 3) README（尝试多个候选，包括 /information/readme/...）
        const readmeResult = await this.fetchReadmeCandidate(id);
        if (readmeResult.error) {
          if (readmeResult.firstHtml) {
            console.debug("[ControlDetail] README 首次被识别为 HTML，snippet：", readmeResult.firstHtml);
            this.introduceHtml =
              `<p style="color:#b33">未能正确加载 README.md（服务器返回 HTML 或 路径不匹配）。</p>` +
              `<p>请确认文件存在于 <code>public/information/readme/control/${id}/README.md</code>，并且文件名大小写完全匹配。</p>`;
          } else {
            this.introduceHtml =
              `<p style="color:#b33">未能找到 README.md（尝试了常见大小写与目录）。</p>` +
              `<p>请确认文件存在于 <code>public/information/readme/control/${id}/README.md</code>。</p>`;
          }
        } else {
          this.introduceHtml = marked.parse(readmeResult.text || "");
        }

        // 4) Github 作者信息（可选）
        if (jsonData && jsonData.author) {
          try {
            const creatorRes = await fetch(`https://api.github.com/users/${jsonData.author}`);
            if (creatorRes.ok) {
              const creator = await creatorRes.json();
              this.avatar = creator.avatar_url;
              this.authorName = creator.name || jsonData.author;
              this.authorBio = creator.bio;
            } else {
              this.authorName = jsonData.author;
            }
          } catch (err) {
            console.warn("[ControlDetail] 获取 Github 信息失败：", err);
            this.authorName = jsonData.author;
          }
        }

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
