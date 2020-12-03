const CopyWebpackPlugin = require('copy-webpack-plugin');
const EndWebpackPlugin = require('./plugins/end-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const utils = require('./utils');

module.exports = {
    // 入口
    entry: {
        app: './src/index'
    },

    // 出口
    output: {
        path: utils.resolve('../dist'),
        filename: 'js/[name].[hash].js',
        chunkFilename: utils.assetsPath("js/[name].[chunkhash].js"),
        publicPath: '/' // 给生成的静态资源路径添加前缀
    },

    // 模块
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // 一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/, // 屏蔽不需要处理的文件（文件夹）
                loader: 'babel-loader', // loader的名称（必须）
            },
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader', // 编译 Less -> CSS
                        options: {
                            // http://lesscss.org/usage/#command-line-usage-options
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }

                    },
                ],
            },
            {
                test: /\.css$/,
                loader: utils.resolve('./loaders/test-loader.js'), // test loader
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json'], // 解析扩展。（当我们通过路导入文件，找不到改文件时，会尝试加入这些后缀继续寻找文件）
        alias: {
            '@src': utils.resolve('../src')
        }
    },

    // 插件
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: utils.resolve('../src/assets/css'),
                    to: utils.resolve('../dist/static/css'),
                    globOptions: {
                        ignore: ['.*']
                    }
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: utils.assetsPath('css/[name].[hash].css'),
            chunkFilename: utils.assetsPath('css/[id].[chunkhash].css'),
        }),
        // test plugin
        new EndWebpackPlugin(() => {
            // Webpack 构建成功，并且文件输出了后会执行到这里，在这里可以做发布文件操作
            console.error('webpack 创建成功！');
        }, (err) => {
            // Webpack 构建失败，err 是导致错误的原因
            console.error(err);
        })
    ]
};
