import { resolve as _resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
    mode: 'development',
    entry: './src/app.tsx',
    output: {
        path: _resolve('docs'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'esbuild-loader',
                exclude: /node_modules/,
                options: {
                    loader: 'tsx',
                },
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sergey Kot\'s CV',
        }),
    ],
}
