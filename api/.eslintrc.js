module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [0]
  },
  extends: ['airbnb-base', 'airbnb-typescript'],
  ignorePatterns: ['.eslintrc.js']
};
