import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { DefinePlugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
export function buildPlugins(options) {
    var isDev = options.mode === 'development';
    var isProd = options.mode === 'production';
    var analyzer = options.analyzer;
    var plugins = [
        new HtmlWebpackPlugin({ template: options.paths.html }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform)
        }),
    ];
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));
    }
    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
}
