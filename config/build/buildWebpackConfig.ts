import { IBuildOptions } from "./types/config";
import { Configuration } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: IBuildOptions): Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        module: {
            // лоадеры используются для обработки всех файлов выходящих за рамки js (css, svg, png, etc.)
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options)   ,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    };
}