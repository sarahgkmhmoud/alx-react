const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    setupFilesAfterEnv: ['./config/setupTests.js'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
  },
{
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve("./dist"),

    },
    mode: 'development',
    module: {
        rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },

                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    // type: 'asset/resource',
                    use: [
                        'file-loader',
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                bypassOnDebug: true, // webpack@1.x
                                disable: true, // webpack@2.x and newer
                            },
                        },
                    ],
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
            ],
        },
    resolve: {
        extensions: ['.*', '.js', '.jsx'],
    },
    devServer: {
        static: {
            directory: './dist',
        },
        compress: true,
        open: true,
        hot: true,
        port: 8564,
    },
    devtool: 'inline-source-map',
    plugins: [
		new HtmlWebpackPlugin({
			name: 'index.html',
			inject: false,
			template: './dist/index.html',
		}),
	],

};
