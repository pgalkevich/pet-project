import { RuleSetRule } from 'webpack';
import { IBuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: IBuildOptions): RuleSetRule[] {
    const cssloader = buildCssLoader(isDev);

    // Если НЕ используется TS, то нужно подключать babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    // порядок лоадеров очень важен. могут быть ошибки
    return [
        fileLoader,
        svgLoader,
        // babelLoader,
        typescriptLoader,
        cssloader,
    ];
}
