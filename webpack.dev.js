const merge = require('webpack-merge')
const common = require('./webpack.base.js')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    devServer: {
        contentBase: './dist',
        port: '8899',
        inline: true,
        historyApiFallback: true,
        hot: true
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/index.html')
        })
    ]
})
