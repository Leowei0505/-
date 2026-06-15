const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    watchOptions: {
      poll: 500,
      aggregateTimeout: 200,
      ignored: /node_modules/,
    },
  },
  devServer: {
    hot: true,
    liveReload: true,
    watchFiles: {
      paths: ['src/**/*', 'public/**/*'],
      options: {
        usePolling: true,
        interval: 500,
      },
    },
  },
})
