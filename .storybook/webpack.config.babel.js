import webpack from 'webpack';
import path from 'path';
import ExtractCssChunksPlugin from 'extract-css-chunks-webpack-plugin';

module.exports = ({ config, mode }) => {
    const filteredRules = config.module.rules.filter(
        rule =>
            rule.test.toString() !== /\.(mjs|jsx?)$/.toString() &&
            rule.test.toString() !== /\.css$/.toString() &&
            rule.test.toString() !==
                /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/.toString(),
    );

    config.module.rules = [
        ...filteredRules,
        {
            test: /\.(j|t)sx?$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'react-docgen-typescript-loader'],
        },
        {
            test: /\.css$/,
            use: [ExtractCssChunksPlugin.loader, 'css-loader'],
        },
        {
            test: /\.svg$/,
            include: path.resolve(__dirname, '../src/images'),
            issuer: {
                test: /\.(jsx?|tsx?|mdx)$/,
            },
            loader: '@svgr/webpack',
            options: {
                svgo: false,
                titleProp: true,
            },
        },
        {
            test: /\.svg$/,
            include: path.resolve(__dirname, '../src/images'),
            issuer: {
                test: /\.css$/,
            },
            loader: 'svg-url-loader',
            options: {
                name: '[name].[ext]',
                limit: 1024,
                noquotes: true,
            },
        },
        {
            test: /\.(jpe?g|png)$/,
            include: path.resolve(__dirname, '../src/images'),
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                limit: 1024,
            },
        },
        {
            test: /\.woff2?$/,
            include: path.resolve(__dirname, '../src/fonts'),
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                limit: 1024,
            },
        },
    ];

    config.plugins = [
        ...config.plugins,
        new ExtractCssChunksPlugin({
            filename: '[name].css',
            ignoreOrder: true,
        }),
        new webpack.EnvironmentPlugin({ ICONS_DIR: '../../images/icons' }),
    ];
    config.devtool = mode === 'DEVELOPMENT' && 'source-map';
    config.resolve.extensions.push('.ts', '.tsx');
    config.performance = false;

    return config;
};
