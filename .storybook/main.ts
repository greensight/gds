export default {
    stories: [
        '../stories/intro/welcome.stories.mdx',
        '../stories/intro/*.stories.mdx',
        '../stories/design/*.stories.mdx',
        '../stories/dev/*.stories.mdx',
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
        'storybook-addon-designs',
    ],
};
