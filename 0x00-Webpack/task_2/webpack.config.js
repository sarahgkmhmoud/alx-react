const path = require('path')
module.exports = {
    entry:'./js/dashboard_main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public')
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["css-loader", "style-loader"],
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
}
