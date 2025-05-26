import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/api'로 시작하는 요청은 로컬 Vercel 함수 서버(3000)로 전달
      '/api': 'http://localhost:5173',
    },
  },
})
