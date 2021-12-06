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
    app.use(
        createProxyMiddleware('/create_users',
            {
                target: 'https://zentesting.herokuapp.com',
                changeOrigin: true
            }
        )
    )
    app.use(
        createProxyMiddleware('/3',
            {
                target: 'https://zentesting.herokuapp.com',
                changeOrigin: true
            }
        )
    )
}