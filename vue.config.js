const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '././' : '/',
  outputDir:'dist',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('img', resolve('public/img'))
  },
  css: {
    // css预设器配置项
    loaderOptions: {
		sass: {
		  additionalData:`@import "./src/style/varible.scss";`
		}
	}
  },
}