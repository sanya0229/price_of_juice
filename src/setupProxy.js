const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/admin',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_URL || 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: {
        '^/admin': '/admin',
      },
    })
  );
};
