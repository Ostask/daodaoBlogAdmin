const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '././',
  outputDir:'dist',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
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