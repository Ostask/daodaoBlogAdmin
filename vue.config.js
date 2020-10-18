const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '././' : '/',
  outputDir:'dist',
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src'),
        'img':resolve('public/img')
      }
    }
  },
  css: {
    // css预设器配置项
    loaderOptions: {
      sass: {
        additionalData:`@import "./src/style/varible.scss";`
      }
    }
  }
}