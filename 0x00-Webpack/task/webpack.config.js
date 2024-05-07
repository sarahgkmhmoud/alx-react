const path = require('path')
module.exports = {
    entry:'./js/dashboard_main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public')
    },
    mode: "production",
    module: {
        rule: [
            {
                test:/\.css$/i,
                use:
                [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
                type: 'asset/resource',
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                                bypassingOnDebug: true,
                                disable: true,
                        },
                    },
                ],
            },
        ],
    },
};
