module.exports = {
  devServer: {
    proxy: 'http://localhost:3000',
    changeOrigin: true,
    cors: true
  }
}
