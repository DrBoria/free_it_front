module.exports = {
  root: true,
  extends: ['airbnb-typescript', 'prettier', 'prettier/react', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'eslint-comments'],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {},
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-array-index-key': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [['builtin', 'external', 'internal'], 'parent', 'index', 'sibling'],
        pathGroups: [
          {
            pattern: './*.module.scss',
            group: 'sibling',
            position: 'after'
          }
        ]
      }
    ],
    'jsx-a11y/label-has-associated-control': 'off',
    'no-restricted-imports': ['error', { patterns: ['../*'] }],
  },
};
