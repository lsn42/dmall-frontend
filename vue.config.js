module.exports = {
  devServer: {
    port: 8088,
    proxy: {
      '/api': {
        target: 'http://172.16.82.15:8081/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  runtimeCompiler: true
}