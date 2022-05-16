import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['umd'],
      name: 'otelul-galati',
      fileName: () => 'otelul-galati.js'
    }
  }
})
