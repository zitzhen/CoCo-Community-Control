<template>
  <div>
    <header>
      <div class="container">
        <h1>ZIT-CoCo-Community隐私政策</h1>
        <p>请仔细阅读此隐私政策</p>
      </div>
    </header>

    <br />
    <div class="card" id="content">
      <div class="progress-container" v-if="loading">
        <div class="progress-bar"></div>
      </div>
      <h2 v-if="loading" id="Loading_tip">请稍后，我们正在处理</h2>
      <div v-else>
        <div v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { marked } from 'marked'

export default {
  name: 'PrivacyPolicy',
  data() {
    return {
      loading: true,
      content: ''
    }
  },
  async mounted() {
    try {
      const response = await axios.get('/src/assets/content/agreement/privacypolicy/content.md')
      this.content = marked.parse(response.data)
      this.loading = false
    } catch (error) {
      console.error('请求出错:', error)
      this.loading = false
    }
  }
}
</script>

<style scoped>
@import '../../src/assets/style/home/style.css';
@import '../../src/assets/style/home/Loading.css';
</style>