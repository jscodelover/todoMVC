const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
                                    template: './public/index.html',
                                    filename: 'index.html',
                                    inject: 'body'
                                })

module.exports = {
    devtool: "cheap-module-source-map",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },
    resolveLoader: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]'
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                          importLoaders: 1
                        }
                    }, 
                    "sass-loader" 
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
          new UglifyJsPlugin({})
        ],
    },
    plugins: [ HtmlWebpackPluginConfig ]
}
