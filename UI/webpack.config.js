// Define this constant for easier usage
const isProd = process.env.NODE_ENV === 'production'

const { resolve } = require('path')

const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const cssLoader = {
    loader: 'css-loader',
    options: {
        minimize: true,
    },
}

const srcDir = resolve(__dirname, 'src')
console.log("dirr "+__dirname)
console.log("srcDir "+srcDir)
console.log("app "+resolve(srcDir, "main.js"))
const vendor = [
    'jquery',
    'bootstrap',
    'moment',
]

const config = {
    name: 'base',

    // Include source maps in development files
    devtool: "eval-source-map",

    entry: {
        //vendor,
        app: resolve(srcDir, "main.js"),
    },

    output: {
        path: resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        clean: true
    },

    resolve: {
        extensions: ['*', '.js'],
        modules: [
            resolve(__dirname, '..', 'node_modules'),
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
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: cssLoader,
                }),
            },
            {
                test: /\.scss|\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [cssLoader, 'sass-loader'],
                }),
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
            Popper: 'popper.js',
        }),
        new HtmlWebpackPlugin({
            title: '',
            chunks: ['app', 'vendor'],
        })
    ],

    profile: isProd,

    performance: {
        hints: 'warning',
        maxEntrypointSize: 400000,
        maxAssetSize: 300000,
    }
}
module.exports = config
