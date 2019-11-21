module.exports = api => {
    api.cache(true);

    const presets = [
        '@babel/preset-react',
        '@babel/typescript',
        [
            '@babel/preset-env',
            {
                modules: false,
                useBuiltIns: 'usage',
                corejs: 3,
            },
        ],
    ];

    const overrides = [
        {
            test: ['./.storybook/webpack.config.babel.js'],
            presets: [['@babel/preset-env']],
        },
    ];

    const plugins = ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import'];

    return {
        presets,
        overrides,
        plugins,
    };
};
