const config = {
    stories: [
        '../stories/intro/welcome.stories.mdx',
        '../stories/intro/*.stories.mdx',
        '../stories/design/*.stories.mdx',
        '../stories/dev/*.stories.mdx',
        '../src/components/**/*.stories.mdx',
        '../src/autokits/**/*.stories.mdx',
    ],
    addons: [
        '@storybook/addon-controls',
        '@storybook/addon-actions',
        '@storybook/addon-a11y',
        '@storybook/addon-viewport',
        '@storybook/addon-backgrounds',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
            },
        },
        'storybook-addon-designs',
    ],
    core: {
        builder: '@storybook/builder-webpack5',
    },
    typescript: {
        reactDocgen: 'none',
    },
};

module.exports = config;
