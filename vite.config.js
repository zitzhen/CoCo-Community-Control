import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import { resolve } from 'path'
import VitePrerender from 'vite-plugin-prerender'
import { isServer } from 'vite' // 动态判断是否为服务端环境

const useHttps = process.env.NODE_ENV !== 'production'

// 仅在客户端环境中导入 vue-router
let routes = []
if (!isServer) {
  // 导入路由配置（仅在客户端环境下）
  routes = require('./src/router/index.js').default.map(route => route.path)
}

export default defineConfig({
  plugins: [
    vue(),
    VitePrerender({
      routes: routes, // 在客户端环境中加载路由
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: useHttps
    ? {
        https: {
          key: fs.readFileSync('./localhost-key.pem'),
          cert: fs.readFileSync('./localhost.pem'),
        },
        host: 'localhost',
        port: 5173,
      }
    : undefined,
  define: {
    'window': 'undefined', // 防止在构建时使用 window
  },
})
