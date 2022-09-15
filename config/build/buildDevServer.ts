import {IBuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
    return {
        open: true,
        port: options.port,
        // эта опция позволяет открывать страницы по прямым ссылкам на них
        historyApiFallback: true
    }
}