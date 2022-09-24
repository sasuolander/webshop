const isProd = process.env.NODE_ENV === 'production'

const  path  = require('path')

const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const srcDir = path.resolve(__dirname, 'src')
console.log("dirr "+__dirname)
console.log("srcDir "+srcDir)
console.log("app "+path.resolve(srcDir, "main.js"))
const vendor = [
    'jquery',
    'lodash'
]

const config = {
    name: 'base',
    mode:'development',
    stats: {
        warnings: false
    },
    // Include source maps in development files
    devtool: "eval-source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        },

        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    entry: {
        vendor,
        app: path.resolve(srcDir, "main.js"),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        clean: true
    },

    resolve: {
        extensions: ['*', '.js'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
        ],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test:  /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, {
                    loader: 'css-loader'
                },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            // options...
                        }}],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.handlebars$/,
                loader: 'raw-loader',
            },
            {
                test: /\.md$/,
                loader: 'raw-loader',
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new HtmlWebpackPlugin({
            title: '',
            template: 'index.template.ejs',
            inject: 'body',
            chunks: ['app', 'vendor'],
        }),
        new MiniCssExtractPlugin(),
        new Dotenv({path:'./.env'})
    ],

    performance: {
        hints: 'warning',
        maxEntrypointSize: 400000,
        maxAssetSize: 300000,
    }
}
module.exports = config
