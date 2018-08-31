module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended'
    ],
    rules: {
        "indent": ["error", 4],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        "vue/html-indent": ["error", 4],
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}