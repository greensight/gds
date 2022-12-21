import { resolve } from 'path';
import ReactDocgenTypescriptPlugin from 'react-docgen-typescript-plugin';
import * as webpack from 'webpack';

export default ({ config, mode }: { config: any; mode: 'DEVELOPMENT' | 'PRODUCTION' }) => {
    const iconsDir = resolve(__dirname, '../src/icons');
    config.plugins.push(new webpack.EnvironmentPlugin({ ICONS_DIR: iconsDir, IS_STORYBOOK: true }));

    config.plugins.push(
        new ReactDocgenTypescriptPlugin({
            tsconfigPath: resolve(__dirname, '../tsconfig.json'),
            propFilter: (prop: any) => !(prop.parent && prop.parent.fileName.includes('.yarn')),
        }),
    );

    // add svgr support
    const fileLoaderRule = (config.module.rules as any[]).find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = iconsDir;

    config.module.rules.push({
        test: /\.svg$/,
        use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
    });

    fileLoaderRule.exclude = iconsDir;

    config.module.rules.push({
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
    });

    config.devtool = mode === 'DEVELOPMENT' && 'source-map';
    config.performance = false;

    if (config.resolve && config.resolve.extensions) {
        config.resolve.extensions.push('.ts', '.tsx');
    }

    if (config.optimization) config.optimization.minimize = false;

    return config;
};
