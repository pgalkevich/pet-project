import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => {
    return (
        {
            test: /\.s[ac]ss$/i,
            use: [
            // MiniCssExtractPlugin компилирует стили в отдельный файл
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                        // включает css модули только для файлов в именах которых присутствует '.module.' (напр. Component.module.scss)
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            // нужно для того чтобы в дев режиме сохранялась читабельная часть имени селектора и пусть к файлу стилей
                            localIdentName: isDev
                                ? '[path][name]__[local]--[hash:base64:5]'
                                : '[hash:base64:8]',
                        },
                    },
                },
                // Compiles Sass to CSS
                'sass-loader',
            ],
        }
    );
};