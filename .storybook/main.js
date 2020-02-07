module.exports = {
    stories: [
        './docs/intro/welcome.stories.mdx',
        './docs/intro/*.stories.mdx',
        './docs/design/*.stories.mdx',
        './docs/dev/*.stories.mdx',
        '../src/components/**/*.stories.mdx',
        '../src/autokits/**/*.stories.mdx',
    ],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-a11y',
        '@storybook/addon-viewport',
        '@storybook/addon-backgrounds',
        '@storybook/addon-docs',
    ],
};
