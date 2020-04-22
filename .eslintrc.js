module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: [
      'airbnb',
      'prettier',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'prettier',
      'import'
    ],
    rules: {
      'import/prefer-default-export': 'off',
      'prettier/prettier': 'error',
      'no-console': ['error'],
      'semi': ['error', 'always'],
    },
    extends: 'eslint:recommended'
  };
