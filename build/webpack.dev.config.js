const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const utils = require('./utils');

module.exports = merge(baseWebpackConfig, {
    // 指定构建环境
    mode:'development',
    devtool: 'cheap-module-eval-source-map',

    // 插件
    plugins:[
        new HtmlWebpackPlugin({
            filename: utils.resolve('../dist/index.html'), // html模板的生成路径
            template: 'index.html',//html模板
            inject: true, // true：默认值，script标签位于html文件的 body 底部
        })
    ],

    // 开发环境本地启动的服务配置
    devServer: {
        historyApiFallback: true, // 当找不到路径的时候，默认加载index.html文件
        hot: true, // 开启热更新
        contentBase: false, // contentBase 是用来指定被访问 html 页面所在目录；
        compress: true, // 一切服务都启用 gzip 压缩：
        port: 8081, // 指定端口
        publicPath: '/',
        proxy: {
            // 接口请求代理
            '/api': {
                target:"http://localhost:3001",
                secure: false
            }
        },
    },
});
