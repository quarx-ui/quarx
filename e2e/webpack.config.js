// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_TO_PROJ = __dirname;
const PORT = 6013;

module.exports = {
    entry: './public/index.tsx',
    mode: 'development',
    context: PATH_TO_PROJ,
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(PATH_TO_PROJ, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        clean: true,
        publicPath: '/',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@e2e': PATH_TO_PROJ,
            '@kit': path.join(PATH_TO_PROJ, 'builds/kit'),
            '@kit-icons': path.join(PATH_TO_PROJ, 'builds/kit-icons'),
        },
    },
    devServer: {
        port: PORT,
        client: {
            overlay: true,
        },
        static: {
            directory: path.join(PATH_TO_PROJ, 'dist'),
        },
        historyApiFallback: true,
        open: process.env.OPEN_IN_BROWSER,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: [
                    '@babel/env',
                    ['@babel/preset-react', { runtime: 'automatic' }],
                    '@emotion/babel-preset-css-prop',
                    '@babel/preset-typescript',
                ] },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(PATH_TO_PROJ, 'public/index.html'),
            filename: 'index.html',
            inject: 'body',
            showErrors: true,
        }),
    ],
};
