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
        createProxyMiddleware('/update_user/',
            {
                target: 'https://zentesting.herokuapp.com',
                changeOrigin: true
            }
        )
    )
    app.use(
        createProxyMiddleware('/delete_user/',
            {
                target: 'https://zentesting.herokuapp.com',
                changeOrigin: true
            }
        )
    )
}