var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCss = new ExtractTextPlugin('css/main.css');
var extracsScss = new ExtractTextPlugin('css/main.scss');

var config = {
    mode: 'development',
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    devServer: {
        host: 'localhost',
        open: true,
        port: 3100,
        contentBase: 'src'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // If you are having trouble with urls not resolving add this setting.
                                // See https://github.com/webpack-contrib/css-loader#url
                                url: false,
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif|jpeg|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // limit: 8192,       //限制图片大小byte
                            name: 'imgs/[name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.(svg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            //配置babel转换高级ES语法
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            //解析vue文件
        ]
    },
    plugins: [
        extractCss,
        extracsScss
    ],
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }
};
module.exports = config;