import * as webpack from 'webpack';
import { resolve } from 'path';

export default ({ config, mode }: { config: webpack.Configuration; mode: 'DEVELOPMENT' | 'PRODUCTION' }) => {
    const iconsDir = resolve(__dirname, '../src/icons');
    const defaultSvgRule = config.module.rules.find(rule => rule.test.toString().includes('svg'));
    defaultSvgRule.exclude = iconsDir;

    config.module.rules = [
        ...config.module.rules,
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
                {
                    loader: 'react-docgen-typescript-loader',
                    options: {
                        tsconfigPath: resolve(__dirname, '../tsconfig.json'),
                    },
                },
            ],
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
        '@autokits': resolve(__dirname, '../src/autokits'),
        '@icons': resolve(__dirname, '../src/icons'),
        '@decorators': resolve(__dirname, 'decorators'),
    };
    config.optimization.minimize = false;
    config.performance = false;

    return config;
};
