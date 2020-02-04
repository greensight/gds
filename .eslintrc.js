module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: ['airbnb', 'plugin:prettier/recommended'],
    plugins: ['@typescript-eslint', 'react-hooks'],
    rules: {
        camelcase: 0,
        'class-methods-use-this': 0,
        'consistent-return': 0,
        eqeqeq: 0,
        'func-names': 0,
        'global-require': 0,
        'import/extensions': 0,
        'import/no-dynamic-require': 0,
        'import/no-duplicates': 0,
        'import/no-extraneous-dependencies': [2, { devDependencies: true }],
        'import/no-named-as-default': 0,
        'import/no-unresolved': [2, { ignore: ['images/responsive'] }],
        'import/prefer-default-export': 1,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/label-has-for': [
            2,
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'jsx-a11y/label-has-associated-control': 0,
        'linebreak-style': 0,
        'no-console': 0,
        'no-nested-ternary': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-shadow': 0,
        'no-var': 0,
        'no-underscore-dangle': 0,
        'no-unused-vars': [2, { args: 'after-used' }],
        'no-use-before-define': 0,
        'prefer-destructuring': [
            2,
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: false,
                    object: false,
                },
            },
        ],
        'react/button-has-type': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-curly-newline': 0,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
            },
        ],
        'react/jsx-indent': [1, 4],
        'react/jsx-indent-props': [1, 4],
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-array-index-key': 0,
        'react/prop-types': 0,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
            },
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.mdx', '.json'],
            },
        },
    },
};
