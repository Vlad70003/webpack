import {ModuleOptions} from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import {BuildOptions} from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {

    const isDev = options.mode === 'development';

    const cssLoader = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        },
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoader,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const imageLoader = {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const tsLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    // getCustomTransformers: () => ({
                    //     before: [require('react-refresh-typescript')()],
                    // }),
                }
            }
        ]
    }

    // const babelLoader = {
    //     test: /\.tsx?$/,
    //     exclude: /node_modules/,
    //     use: {
    //         loader: "babel-loader",
    //         options: {
    //             presets: [
    //                 '@babel/preset-env',
    //                 "@babel/preset-typescript",
    //                 ["@babel/preset-react", {
    //                     "runtime": isDev ? "automatic" : "classic"
    //                 }]
    //             ]
    //         }
    //     }
    // }

    return [scssLoader, imageLoader, tsLoader]
}