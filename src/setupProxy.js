const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        createProxyMiddleware('/show_users',
            {
                target: 'https://zentesting.herokuapp.com',
                changeOrigin: true
            }
        )
    )
}