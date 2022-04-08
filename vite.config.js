import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 引入文件
const path = require('path')

export default () => {
  return defineConfig({
    server: {
      port: 3000,
      open: false,
      // 代理
      proxy: {
        '/dev-api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/dev-api/, '')
        }
      }
    },
    // 别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    // base: loadEnv(mode, process.cwd()).VITE_APP_BASE_API,
    plugins: [vue()]
  })
}
