const webpack = require('webpack');

module.exports = {
    entry: './app.ts',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{ loader: 'ts-loader' }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ beautify: false, sourceMap: true })
    ],
    devtool: 'source-map'
}