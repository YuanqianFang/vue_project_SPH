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
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
        // pathRewrite: { '^/api': '' },
      },
    },
  },
}
