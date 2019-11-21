module.exports = {
    plugins: {
        'postcss-preset-env': {
            stage: false,
            features: {
                'custom-media-queries': {
                    importFrom: 'src/styles/media.css',
                },
                'custom-selectors': {
                    importFrom: 'src/styles/selectors.css',
                },
                'media-query-ranges': true,
                'not-pseudo-class': true,
            },
        },
        'postcss-mixins': {},
        'postcss-nested': {},
        'postcss-normalize': {},
        'postcss-inline-svg': {},
        'postcss-pxtorem': {},
    },
};
