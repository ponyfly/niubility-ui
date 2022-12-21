import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { alias } from "../../scripts/index.js";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  let docsBuild = {}
  return {
    server: {
      port: '3003',
      ...docsBuild
    },
    plugins: [ vue() ],
    build: {
      rollupOptions: {
        external: [ 'element-plus', 'vue' ]
      },
      lib: {
        entry: path.resolve(__dirname, './components/index.js'),
        name: 'niubilityUi',
        fileName: 'nb-element-plus',
        formats: ['es', 'cjs', 'umd', 'iife']
      }
    },
    resolve: {
      alias: await alias()
    },
  }
})
