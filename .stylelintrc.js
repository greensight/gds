module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
    ignoreFiles: ['node_modules/**/*.*', 'public/**/*.*', 'dist/**/*.*', 'docs/**/*.*'],
    rules: {
        'block-no-empty': [true, { severity: 'warning' }],
        'comment-empty-line-before': null,
        'custom-property-empty-line-before': null,
        'no-descending-specificity': null,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['define-mixin', 'mixin'],
            },
        ],
    },
};
