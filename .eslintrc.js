const indent = [2, 4];

module.exports = {
    globals: {
        JSX: 'readonly',
    },
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'plugin:json/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/rules/react',
        'airbnb/rules/react-hooks',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        ecmaVersion: 12,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
            node: {
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
            },
        },
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'react-hooks/exhaustive-deps': [2, {
            additionalHooks: "(useEnhancedEffect)",
        }],
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'import/extensions': ['error', 'never', { svg: 'always', json: 'always' }],
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
        'object-curly-newline': 0,
        'max-len': [
            1,
            {
                code: 120,
                tabWidth: 4,
                ignoreUrls: true,
                ignoreComments: true,
                ignorePattern: 'd="(.)*$',
            },
        ],
        indent: 'off',
        'react/jsx-indent': indent,
        'react/jsx-indent-props': indent,
        curly: ['error', 'all'],
        '@typescript-eslint/indent': indent,
        '@typescript-eslint/member-delimiter-style': ['error'],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '_',
            },
        ],
        'jsx-a11y/label-has-associated-control': [0, {
            labelComponents: ['CustomInputLabel'],
            labelAttributes: ['label'],
            controlComponents: ['CustomInput'],
            depth: 3,
        }],
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'react/jsx-props-no-spreading': 0,
        'no-use-before-define': 'off',
        'react/prop-types': 0,
        '@typescript-eslint/consistent-type-exports': 2,
        'jest/valid-title': ['warn', { ignoreTypeOfDescribeName: true }],
        'jest/no-done-callback': ['warn'],
        'jest/no-export': 0,
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/jsx-fragments': [2, 'element'],
    },
};
