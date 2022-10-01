import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgToFont from 'vite-plugin-svg-to-font'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        svgToFont()
    ]
})
