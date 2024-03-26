import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildLoaders(options) {
    var isDev = options.mode === 'development';
    var cssLoader = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        },
    };
    var scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoader,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };
    var imageLoader = {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };
    var tsxLoader = {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                transpileOnly: isDev,
            },
        },
        exclude: /node_modules/,
    };
    return [scssLoader, tsxLoader, imageLoader];
}
