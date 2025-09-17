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
        <div :class="['tab', { active: activeTab === 'files' }]" data-tab="files" @click="switchTab('files')">控件</div>
        <div :class="['tab', { active: activeTab === 'articles' }]" data-tab="articles" @click="switchTab('articles')">文章</div>
    </div>
    
    <!-- 文件板块 -->
    <div :class="['tab-content', { active: activeTab === 'files' }]" id="files">
        <h2 class="section-title">TA的控件</h2>
        <div class="file-list" id="display_controls">
            <div class="file-card" v-for="(control, index) in controlList" :key="index">
                <div class="file-icon">
                    <i class="far fa-file-code"></i>
                </div>
                <div class="file-info">
                    <div class="file-name">{{ control }}</div>
                </div>
                <div class="file-actions">
                    <a :href="`https://cc.zitzhen.cn/control/${control}`">
                        <button class="download-btn">去详情</button>
                    </a>
                </div>
            </div>
            <p v-if="controlList.length === 0 && !loading">暂无控件</p>
            <p v-if="loading">请稍后，我们正在处理数据……</p>
        </div>
    </div>
    
    <!-- 文章板块 -->
    <div :class="['tab-content', { active: activeTab === 'articles' }]" id="articles">
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

<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

const Nickname = ref('')
const bio = ref('加载中...')
const avatar = ref('')
const Control_number = ref('')
const controlList = ref([])
const loading = ref(true)
const activeTab = ref('files')

// 更新 head（响应式）
useHead({
  title: () => `${Nickname.value} 的主页|ZIT-CoCo-Community`,
  meta: [
    { name: 'description', content: () => bio.value }
  ]
})

function getCurrentUrlLastSegment() {
  const currentUrl = window.location.href
  const cleanedUrl = currentUrl.endsWith('/') ? currentUrl.slice(0, -1) : currentUrl
  const url = new URL(cleanedUrl)
  const pathSegments = url.pathname.split('/').filter(segment => segment !== '')
  return pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : ''
}

async function fetch_github_information(username) {
  const url = `https://api.github.com/users/${username}`
  const res = await fetch(url)
  return res.ok ? res.json() : null
}

async function fetch_user_information(username) {
  const url = `https://${window.location.host}/information/user/${username}.json`
  const res = await fetch(url)
  return res.ok ? res.json() : null
}

function render_information(information) {
  Nickname.value = information.name || information.login
  bio.value = information.bio || '此人很懒，什么都没有'
  avatar.value = information.avatar_url || ''
}

onMounted(async () => {
  const username = getCurrentUrlLastSegment()
  const user_github_information = await fetch_github_information(username)
  const user_introduction = await fetch_user_information(username)

  if (user_github_information) render_information(user_github_information)
  else if (user_introduction) render_information(user_introduction)

  Control_number.value = user_introduction ? user_introduction.number_of_controls : 'Error'
  if (user_introduction?.list_of_controls) controlList.value = user_introduction.list_of_controls

  loading.value = false
})
</script>