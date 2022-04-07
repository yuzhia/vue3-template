import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// 引入文件
const path = require('path')

export default ({ mode }) => {
  return defineConfig({
    // 别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    // 代理
    proxy: {
      [process.env.VITE_APP_BASE_API]: {
        target: `http://localhost:8100`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VITE_APP_BASE_API]: ''
        }
      }
    },
    define: {
      'process.env': {}
    },
    // base: loadEnv(mode, process.cwd()).VITE_APP_BASE_API,
    plugins: [vue()]
  })
}
