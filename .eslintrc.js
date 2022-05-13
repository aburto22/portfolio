module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'next',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'jsx-a11y/anchor-is-valid': [2, {
      components: [ 'Link' ],
      specialLink: [ 'hrefLeft', 'hrefRight' ],
      aspects: [ 'invalidHref', 'preferButton' ]
    }],
    'react/jsx-props-no-spreading': [2, {
      exceptions: ['Component']
    }],
  },
  ignorePatterns: ['.eslintrc.js', 'node_modules']
};
