var webpack = require('webpack');
var path = require("path");

module.exports = {
    devtool: 'source-map',
    debug: true,
    devServer: {
        hot: true,
        inline: true,
        port: 7001,
        historyApiFallback: true
    },
     entry: [
    './src/app'
    ],
    output: {
        path: path.resolve(__dirname, "/bin/"),
        publicPath: "/bin/",
        filename: "app.bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            { 
                test: /\.styl$/, 
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.txt$/,
                loader: 'raw-loader'
            }, {
                test: /\.(eot|ttf|wav|mp3)$/,
                loader: 'file-loader'
            }, {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            }, {
                test: /\.(eot|ttf|woff2?|otf|svg|png|jpg)$/,
                loaders: ['file']
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=10000'
            }

        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
};