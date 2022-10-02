const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭 lint
  lintOnSave: false,

  // 配置反向代理
  devServer: {
    proxy: {
      '/kerwin': {
        target: 'https://m.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '/kerwin': ''// kerwin 替换成空的字符串
        }
      }

    }
  }
})
