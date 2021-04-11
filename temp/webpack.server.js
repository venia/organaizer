const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server/index.js',

    target: 'node',

    externals: [nodeExternals()],

    output: {
        path: path.resolve('server-build'),
        filename: 'index.js'
    },

    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            }
        ],
    }

    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             use: [
    //                 { loader: 'babel-loader' },
    //                 { loader: 'style-loader' },
    //                 { loader: 'css-loader' }
    //             ],
    //         }
    //     ]
    // }
};