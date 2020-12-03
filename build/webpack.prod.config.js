const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const utils = require('./utils');


module.exports = merge(baseWebpackConfig,{
    // 指定构建环境
    mode: 'production',

    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            filename: utils.resolve('../dist/index.html'), // html模板的生成路径
            template: 'index.html',// html模板
            inject: true, // true：默认值，script标签位于html文件的 body 底部
            hash: true, // 在打包的资源插入html会加上hash
            // html 文件进行压缩
            minify: {
                removeComments: true,        // 去注释
            }
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
    ],

    // webpack4.x的代码压缩和拆包都在这里处理
    optimization: {
        minimizer: [
            // 压缩css
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    discardComments: { removeAll: true } // 移除注释
                }
            }),
            // 自定义js优化配置，将会覆盖默认配置
            new UglifyJsPlugin({
                parallel: true,  //使用多进程并行运行来提高构建速度
                sourceMap: false,
                uglifyOptions: {
                    warnings: false,
                    compress: {
                        unused: true,
                        drop_debugger: true,
                        drop_console: true,
                    },
                    output: {
                        comments: false // 去掉注释
                    }
                }
            })
        ],
        // 拆包
        splitChunks: {
            chunks: "all"
        },
    }
});
