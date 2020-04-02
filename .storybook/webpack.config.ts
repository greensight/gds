import * as webpack from 'webpack';
import { resolve } from 'path';

export default ({ config, mode }: { config: webpack.Configuration; mode: 'DEVELOPMENT' | 'PRODUCTION' }) => {
    const iconsDir = resolve(__dirname, '../src/icons');

    if (config.module) {
        const defaultSvgRule = config.module.rules.find((rule) => rule.test && rule.test.toString().includes('svg'));
        if (defaultSvgRule) defaultSvgRule.exclude = iconsDir;

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
                            propFilter: (prop: any) => !(prop.parent && prop.parent.fileName.includes('.yarn')),
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
    }

    config.plugins = [
        ...(config.plugins || []),
        new webpack.EnvironmentPlugin({
            ICONS_DIR: iconsDir,
        }),
    ];

    config.devtool = mode === 'DEVELOPMENT' && 'source-map';
    config.performance = false;

    if (config.resolve && config.resolve.extensions) {
        config.resolve.extensions.push('.ts', '.tsx');
    }

    if (config.optimization) config.optimization.minimize = false;

    return config;
};
