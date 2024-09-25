import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: "@",replacement: "/src/*"},
      {find: "@pages", replacement: "/src/pages"},
      {find: "@components", replacement: "/src/components"},
      {find: "@layout", replacement: "/src/layout"},
      {find: "@router", replacement: "/src/router"},
      {find: "@utils", replacement: "/src/utils"},
      {find: "@service", replacement: "/src/service"}
    ]
  }
})
