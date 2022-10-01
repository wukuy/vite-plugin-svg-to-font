const path = require('path')
const fs = require('fs')
const svg2font = require('./svg2font.js')

const _PLUGIN_NAME = 'vite-plugin-svg-to-font'
let rootDir = ''

module.exports = function(userConfig = {}) {
    const dirs = userConfig.dirs || ['src/assets/icon']

    return {
        name: _PLUGIN_NAME,
        configResolved(resolvedConfig) {
            rootDir = resolvedConfig.root
        },
        configureServer(server) {
            const updateFont = (filePath) => {
                let { outputPath, unicodeNum, fileName, fontFamily, fontClass  } = userConfig = {}

                const generateDirs = getGenerateDirs(dirs, filePath)
                generateDirs.forEach(dir => generate(dir, outputPath || path.join(dir, './font'), { outputPath, unicodeNum, fileName, fontFamily, fontClass }))
            }

            server.watcher.on('add', (filePath) => {
                updateFont(filePath)
            })

            server.watcher.on('unlink', (filePath) => {
                updateFont(filePath)
            })
        }
    }
}

function generate(inputPath, outputPath, {
    unicodeNum = 60000,
    fileName = 'iconfont',
    fontFamily = 'iconfont',
    fontClass = 'icon-'
} = {}) {
    svg2font.generate(inputPath, outputPath, {
        unicodeNum,
        fileName,
        fontFamily,
        fontClass
    })
}

function getGenerateDirs(dirs, filePath) {
    return dirs
        .map(dir => path.join(rootDir, dir))
        .filter(dir => fs.existsSync(dir) && RegExp(`^${dir}`).test(filePath) && path.extname(filePath) === '.svg')
}
