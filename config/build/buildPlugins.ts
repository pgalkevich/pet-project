import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import { IBuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';


export function buildPlugins({ paths, isDev }: IBuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            title: 'PG Project',
            template: paths.html,
        }),
        // необходим для отображения прогресса сборки и статистики по ней
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            IS_DEV: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            // выключает автоматическое открытие окна статистики в браузере
            // при необходимости эту страницу млжно открыть по адресу в консоли (напр. http://127.0.0.1:8888)
            openAnalyzer: false,
        }),
    ];
}
