import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import {IBuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildPlugins({paths}: IBuildOptions): WebpackPluginInstance[] {
     return [
         new HtmlWebpackPlugin({
             title: 'PG Project',
             template: paths.html
         }),
         new ProgressPlugin(),
         new MiniCssExtractPlugin({
             filename: 'css/[name].[contenthash:8].css',
             chunkFilename: 'css/[name].[contenthash:8].css'
         }),
     ]
}
