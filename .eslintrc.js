module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: [
        'react',
        'i18next'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        indent: [2, 4],
        'react/jsx-indent-props': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],
        'n/handle-callback-err': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/prefer-includes': 'off'
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: { 'i18next/no-literal-string': 'off' }
        }
    ]
}
