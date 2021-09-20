module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    ignorePatterns: ['*.test.js', 'iconfont.js'],
    rules: {
        'no-console': ['off'],
        indent: ['error', 4, { SwitchCase: 1 }],
        'max-len': ['error', { code: 140 }],
        'object-curly-newline': ['error', {
            ObjectExpression: {
                multiline: true,
                minProperties: 8,
            },
            ObjectPattern: {
                multiline: true,
                minProperties: 8,
            },
        }],
        'max-classes-per-file': ['error', 5],
        'padded-blocks': ['error', { classes: 'always' }],
        'import/no-unresolved': 'off',
        'react/jsx-indent': ['error', 4], // 缩进距离
        'react/jsx-indent-props': ['error', 4], // props缩进距离
        'react/prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prefer-stateless-function': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'class-methods-use-this': 'off',
        'linebreak-style': ['off', 'windows'],
        'no-param-reassign': 'off', // 直接修改形参检测
        'react/no-array-index-key': 'off',
        'react/jsx-props-no-spreading': 'off', // props上使用拓展运算符检测
        'no-shadow': 'off', // 声明和形参冲突检测(影子)
        'react/forbid-prop-types': 'off',
        'import/extensions': 'off',
        'no-plusplus': 'off', // ++检测
        'no-unused-expressions': 'off',
        'no-unused-vars': ['warn'],
        'arrow-parens': ['off', 'as-needed'], // 箭头函数括号检测 能省则省
        camelcase: 'off', // 驼峰命名检测

    },
};
