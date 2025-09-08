<template>
  <div class="card" v-html="content"></div>
</template>

<style>
.card{
    text-align: left;
    width: 95%;
    margin: 0 auto;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    padding: 20px;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { marked } from 'marked'

const content = ref('')

onMounted(async () => {
  try {
    // 从public目录获取Markdown文件
    const response = await fetch('/agreement/useragreement.md')
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const markdownText = await response.text()
    content.value = marked(markdownText)
  } catch (error) {
    console.error('请求出错:', error)
    content.value = '加载内容失败'
  }
})
</script>