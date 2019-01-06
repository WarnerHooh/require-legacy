const path = require('path');
const webpack = require('webpack');
const glob = require("glob")

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const entries = glob.sync("./src/components/*")
    .reduce(function (accu, next) {
        const fileName = path.basename(next, path.extname(next));
        return Object.assign({}, accu, {
            [fileName]: next
        });

    }, {});

console.log(entries)

module.exports = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'dist/components'),
        filename: '[name]/index.js',
        libraryTarget: "umd",
        library: '[name]'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    externals: [
        'jquery', 'vue'
    ],
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]/style.css'
        })
    ],
    optimization: {
        minimize: false
    }
};