import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

const resolve = p => {
  return path.resolve(__dirname, p)
}

export default () => {
  return defineConfig({
    server: {
      port: 3000,
      open: false,
      proxy: {
        '/dev-api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/dev-api/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve('./src')
      }
    },
    plugins: [vue()]
  })
}
