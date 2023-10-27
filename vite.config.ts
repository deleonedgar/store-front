import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr"
import path from 'path'
import sass from 'vite-plugin-sass';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sass(),
    svgr()
  ],
  server: {
    host: true
  },
  resolve: {
    alias: [
      { 
        find: '@', 
        replacement: path.resolve(__dirname, 'src') 
      },
      { 
        find: '@/public', 
        replacement: path.resolve(__dirname, 'public') 
      },
    ]
  }
})