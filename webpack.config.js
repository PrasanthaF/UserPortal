var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular', 'angular-resource', 'angular-ui-router', 'angular-ui-bootstrap']  
    },
    
    // watch: true,

    output: {
        path: __dirname + '/js',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader",
                enforce: 'pre'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
        new ExtractTextPlugin("styles.css")
    ]
};