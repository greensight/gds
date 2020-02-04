module.exports = api => {
    api.cache(true);

    return {
        presets: [
            '@babel/preset-react',
            '@babel/typescript',
            '@emotion/babel-preset-css-prop',
            [
                '@babel/preset-env',
                {
                    modules: false,
                },
            ],
        ],
    };
};
