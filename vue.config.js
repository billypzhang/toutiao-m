module.exports = {
  publicPath: './',
  lintOnSave: false,
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/api': {
        target: 'https://toutiao.m.lipengzhou.com/api/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        },
        headers: {
          referer: 'https://toutiao.m.lipengzhou.com/',
          origin: 'https://toutiao.m.lipengzhou.com'
        }
      }
    }
  }
}
