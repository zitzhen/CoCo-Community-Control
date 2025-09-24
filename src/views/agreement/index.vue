<template>
    <header>
      <div class="container">
        <h1>ZIT-CoCo-Community协议公示</h1>
        <p>包含适用CoCo-Community的所有协议</p>
      </div>
    </header>

<router-link :to="{ name: 'UserAgreement'}" class="file-link">
    <span class="file-list">
        <span class="file-card doc">
            <span class="file-content">
                <span class="file-name">CoCo-Community用户协议</span>
            </span>
        </span>
    </span>
</router-link>

<router-link :to="{ name: 'PrivacyPolicy'}" class="file-link">
     <span class="file-list">
    <span class="file-card doc">
        <span class="file-content">
            <span class="file-name">CoCo-Community隐私协议</span>
        </span>
    </span>
    </span>
</router-link>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: '协议公示|CoCo-Community|ZIT-CoCo-Community适用协议公示',
  meta: [
    {content: '这是Zit-CoCo-Community的协议公示页面，公示了所有适用于CoCo-Community的协议及条款，这包括《用户协议》和《隐私政策》' }
  ]
})
</script>