import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolves } from "./buildResolves";
export function buildWebpack(options) {
    var mode = options.mode, paths = options.paths;
    var isDev = options.mode === 'development';
    return {
        mode: mode !== null && mode !== void 0 ? mode : 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : false,
        plugins: buildPlugins(options),
    };
}
