import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import { resolve } from 'path'
import VitePrerender from 'vite-plugin-prerender'
import routes from './src/router/index.js' // 导入路由配置

const useHttps = process.env.NODE_ENV !== 'production'

// 提取所有路由路径
const allRoutes = routes.map(route => route.path)

export default defineConfig({
  plugins: [
    vue(),
    VitePrerender({
      // 使用所有的路由路径来预渲染页面
      routes: allRoutes, // 路由路径传递给插件
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
})
