const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
configureWebpack:(config) => {
  const plugins = []
  plugins.push(new NodePolyfillPlugin())
}

module.exports = {
  productionSourceMap: false,
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        // pathRewrite: { '^/api': '' },
      },
    },
  },
}
