import { ResolveOptions } from "webpack";
import {IBuildOptions} from "./types/config";
// const path = require('path');

export function buildResolvers(options: IBuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            options.paths.src,
            'node_modules'
        ],
        // имя основного файла с экспортом из всей папки
        mainFiles: ['index'],

        // Если захочется вместо абсолютных путей использовать алиасы (через @/Src/...)
        // alias: {
        //     Src: path.resolve(__dirname, 'src/'),
        //     App: path.resolve(__dirname, 'src/app/'),
        // },
    }
}
