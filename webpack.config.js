const path = require("path");
const HtmlWebpackPlugin =    require('html-webpack-plugin');
module.exports = {
    entry: "./app/index.js",
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader','css-loader'] },
            { test: /\.(js)$/, use: "babel-loader" },
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.(png|jpg)$/, use: 'file-loader' },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
    },
    mode: 'development',
    plugins:[
        new HtmlWebpackPlugin({
            template:'app/index.html'
        })
    ],
    loaders: [
        { test: /\.(png|jpg)$/, loader: 'file-loader' }
    ]
} ;