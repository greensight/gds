// TODO Можно упростить preview-head, т.к. все компоненты вынесены в stories
// TODO Вероятно стоит вынести информацию по неймингам на отдельную страницу - много повторений

module.exports = {
    stories: [
        './docs/welcome.stories.mdx',
        './docs/changelog.stories.mdx',
        './docs/design/**/*.stories.mdx',
        './docs/dev/**/*.stories.mdx',
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
