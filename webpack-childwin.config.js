var path = require('path');
var config = {
    entry: path.resolve(__dirname, 'src/js/ChildWindow.js'),
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'childWindow.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/, // A regexp to test the require path. accepts either js or jsx
            exclude: /node_modules/,
            loader: ['babel'], // The module to load. "babel" is short for "babel-loader"
            query: {
                presets: ['es2015']
            },
            devtool: "source-map"
        },

            {
                test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
                exclude: /node_modules/,
                loader: ['babel'], // The module to load. "babel" is short for "babel-loader"
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                // When you encounter SCSS files, parse them with node-sass,
                // then return the results as a string of CSS
                test: /\.scss/,
                loader: 'style!css!sass',
                loaders: ['style', 'css', 'sass'],
            },
            { test: /\.png$/, loader: "url-loader?limit=100000" }

        ]
    }
};

module.exports = config;