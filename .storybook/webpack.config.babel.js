import webpack from 'webpack';
import { resolve } from 'path';

module.exports = ({ config }) => {
    const iconsDir = resolve(__dirname, '../src/images/icons');
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

    config.resolve.extensions.push('.ts', '.tsx');
    config.performance = false;

    return config;
};
