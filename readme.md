# SVG自动生成字体图标
指定一个存放svg的目录(默认目录: `src/assets/icon`)，自动生成字体图标

生成前
```bash
├── src
│   ├── App.vue
│   ├── assets
│   │   └── icon
│   │       └── vue.svg
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
│   │   └── vue.svg
```

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


## 设置SVG存放目录
默认目录`src/assets/icon`

```bash
svgToFont({
    dirs: [ 'src/assets/svg']
})
```

## 设置图标前缀
```bash
svgToFont({
    fontClass: 'icon-'
})
```

