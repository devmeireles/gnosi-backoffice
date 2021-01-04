module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': 'off',
    'vue/html-self-closing': 'off',
    'no-plusplus': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-unresolved': 'off',
    'global-require': 'off',
    'no-empty-pattern': 'off',
    'no-lonely-if': 'off',
    'vue/require-valid-default-prop': 'off',
  },
};
