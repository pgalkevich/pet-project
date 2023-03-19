import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {IBuildOptions} from "./types/config";

export function buildLoaders({isDev}: IBuildOptions): RuleSetRule[] {
    const cssloader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        // включает css модули только для файлов в именах которых присутствует '.module.' (напр. Component.module.scss)
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        // нужно для того чтобы в дев режиме сохранялась читабельная часть имени селектора и пусть к файлу стилей
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

        // Если НЕ используется TS, то нужно подключать babel-loader
        const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typescriptLoader,
        cssloader
    ];
}
