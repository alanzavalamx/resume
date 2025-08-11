import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Auto-detect repo name in GitHub Actions to set correct base (/REPO/)
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isCI = !!process.env.GITHUB_ACTIONS
const base = isCI && repo ? `/${repo}/` : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
