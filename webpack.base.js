const path = require('path')

module.exports = {
    entry: {
        index: path.join(__dirname, '/src/main.js')
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/[name].[hash].js'
    }
}