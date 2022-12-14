# SVG自动生成字体图标
指定一个存放svg的目录(默认目录: `src/assets/icon`)，自动生成字体图标

## 安装

```bash
npm i vite-plugin-svg-to-font
```

`vite.config.js`
```javascript
import svgToFont from 'vite-plugin-svg-to-font'

export default defineConfig({
    plugins: [
        ...
        svgToFont()
    ]
})
```

## 使用
`main.js`
```javascript
import './assets/icon/font/iconfont.css';
```

`App.vue`
```html
<template>
    <span class="iconfont icon-vite"></span>
</template>
```
其他使用方式，查看`src/assets/icon/font/demo_index.html`

## 插件生成效果
生成前
```bash
├── src
│   ├── App.vue
│   ├── assets
│   │   └── icon
│   │       └── vite.svg
```

生成后
```bash
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── icon
│   │   │   └── font
│   │   │       ├── demo.css
│   │   │       ├── demo_index.html
│   │   │       ├── iconfont.css
│   │   │       ├── iconfont.eot
│   │   │       ├── iconfont.js
│   │   │       ├── iconfont.svg
│   │   │       ├── iconfont.ttf
│   │   │       ├── iconfont.woff
│   │   │       └── iconfont.woff2
│   │   └── vite.svg
```

## 设置SVG存放目录
默认目录`src/assets/icon`

```bash
svgToFont({
    dirs: [ 'src/assets/svg']
})
```

