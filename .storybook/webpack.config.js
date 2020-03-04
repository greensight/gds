const webpack = require('webpack');
const { resolve } = require('path');

module.exports = ({ config, mode }) => {
    const iconsDir = resolve(__dirname, '../src/icons');
    const defaultSvgRule = config.module.rules.find(rule => rule.test.toString().includes('svg'));
    defaultSvgRule.exclude = iconsDir;

    config.module.rules = [
        ...config.module.rules,
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'react-docgen-typescript-loader'],
        },
        {
            test: /\.svg$/,
            include: iconsDir,
            loader: '@svgr/webpack',
            options: {
                svgo: false,
                titleProp: true,
            },
        },
    ];

    config.plugins = [
        ...config.plugins,
        new webpack.EnvironmentPlugin({
            ICONS_DIR: iconsDir,
        }),
    ];

    config.devtool = mode === 'DEVELOPMENT' && 'source-map';
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = {
        ...config.resolve.alias,
        '@components': resolve(__dirname, '../src/components'),
        '@utils': resolve(__dirname, '../src/utils'),
        '@helpers': resolve(__dirname, '../src/helpers'),
        '@icons': resolve(__dirname, '../src/icons'),
        '@storybook-decorators': resolve(__dirname, './decorators'),
    };
    config.optimization.minimize = false;
    config.performance = false;

    return config;
};
