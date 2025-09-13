<!--正在重构-->
<template>
    <header>
        <div>
            <h1>ZIT-CoCo-Community</h1>
        </div>
    </header>
    <div class="container" id="avatar">
    <!-- 用户信息头部 -->
    <div class="profile-header">
         <img :src="avatar" alt="用户头像" class="avatar" id="avatar_img">
        <div class="user-info">
            <h1 id="user_name">{{ Nickname }}</h1>
            <!--用户GitHub名称-->
            <p id="user_introduction">{{ bio }}</p>
            <!--用户GitHub介绍-->
            <div class="stats">
                <div class="stat-item">
                    <div class="stat-number" id="number_of_controls">{{ Control_number }}</div>
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
            <!-- 文章卡片 -->
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

<style>
@import url(../../assets/style/user/style.css);
</style>

<script>
export default {
  data() {
    return {
      Nickname: '',
      bio: '',
      avatar: '',
      Control_number: '',
      loading: true
    };
  },
  mounted() {
    this.main();
  },
  methods: {
    getCurrentUrlLastSegment() {
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
    },

    async fetch_github_information(username) {
      try {
        const url = `https://api.github.com/users/${username}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    async fetch_user_information(username) {
      try {
       const url = `https://${window.location.host}/information/user/${username}.json`;
        console.log(url);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    render_information(information) {
      this.Nickname = information.name || information.login;
      this.bio = information.bio || '此人很懒，什么都没有';
      this.avatar = information.avatar_url || '';
    },

    async main() {
      const username = this.getCurrentUrlLastSegment();
      const user_github_information = await this.fetch_github_information(username);
      const user_introduction = await this.fetch_user_information(username);
      
      // 使用GitHub信息或用户信息来渲染
      if (user_github_information) {
        this.render_information(user_github_information);
      } else if (user_introduction) {
        this.render_information(user_introduction);
      }
      
      // 内部信息渲染
      this.Control_number = user_introduction ? user_introduction.number_of_controls : 'Error';


      const Controljson = user_introduction.list_of_controls;

      let Control ="";

      for (let i = 0; i < Controljson.length; i++){
        let name = Controljson[i];
        Control += `
            <div class="file-card">
              <div class="file-icon">
                <i class="far fa-file-code">${name}</i>
              </div>
              <div class="file-info">
                  <div class="file-name"></div>
              </div>
              <div class="file-actions">
                  <a href="https://cc.zitzhen.cn/control/${name}">
                      <button class="download-btn">去详情</button>
                  </a>
            </div>
        </div>
        `
        this.htmlControl = Control;
      }
      this.loading = false;
    }
  }
};
</script>