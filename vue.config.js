module.exports = {
  runtimeCompiler: false,
  devServer: {
    // 配置项目的正向代理
    proxy: {//http-proxy-middleware
      '/api': {
        target: 'http://localhost:9000',
        changeOrigin: true
      }
    }
  }
}
