const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
                                    template: './public/index.html',
                                    filename: 'index.html',
                                    inject: 'body'
                                })


module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "/dist"),
        filename: "bundle.js"
    },
    resolveLoader: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
		        exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // {
            //     test: /\.js$/,
		    //     exclude: /node_modules/,
            //     loader: 'eslint-loader'
            // },
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
    plugins: [ HtmlWebpackPluginConfig ]
}
