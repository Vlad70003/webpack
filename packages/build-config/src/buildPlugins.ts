import MiniCssExtractPlugin, {Configuration} from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, {DefinePlugin} from "webpack";
import {BuildOptions} from "./types/types";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {

    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';
    const analyzer = options.analyzer;

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: options.paths.html}),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform)
        }),
    ];

    if (isDev) {
        plugins.push(
            new webpack.ProgressPlugin()
        )
        // plugins.push(
        //     new ForkTsCheckerWebpackPlugin()
        // )
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            })
        )
        plugins.push(
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(options.paths.public, 'locales'),
                        to: path.resolve(options.paths.output, "locales")
                    },
                ],
            }),
        )
    }

    return plugins;
}