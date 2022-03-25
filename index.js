module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:json/recommended',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['simple-import-sort', 'import'],
  env: {
    'node': true,
    'es6': true,
    'jest': true,
    'jest/globals': true
  },
  globals: {
    expect: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    // eslint
    'curly': 2,
    'indent': ['error', 2, { SwitchCase: 1 }],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      },
    ],
    'no-async-promise-executor': 'warn',
    'no-console': 'warn',
    'no-empty-pattern': 'warn',
    'no-empty': 'error',
    'no-import-assign': 'error',
    'no-lonely-if': 'error',
    'no-multiple-empty-lines': 'error',
    'no-sync': 'warn',
    'no-undef': 'error',
    'no-unused-vars': 'off',
    'no-useless-escape': 'warn',
    'no-var': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['class', 'function', 'export']
      },
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-promise-reject-errors': 'off',
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false
      },
    ],
    'require-await': 'error',
    'semi': ['error', 'always'],
    'sort-imports': 'off',

    // @typescript-eslint
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': [
      'warn',
      {
        allowSingleExtends: false
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error', 
        {
          vars: 'all',
          args: 'after-used'
        }
    ],

    // import
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-commonjs': 'error',
    'import/no-cycle': 'error',

    // jest
    'jest/no-mocks-import': 'off',

    // node
    'node/no-unpublished-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',

    // prettier
    'prettier/prettier': [
      'error',
      { bracketSpacing: true },
      { usePrettierrc: true }
    ],

    // simple-import-sort
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^[a-z]'], // libraries
          ['^@\\w'], // started from @
          ['^[A-Z]'], // aliases
          ['^\\.'] // others file
        ]
      }
    ],

    // sonarjs
    'sonarjs/prefer-immediate-return': 'warn',
    'sonarjs/no-nested-template-literals': 'off'
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true
          }
        ]
      }
    }
  ],
  settings: {
    'import/resolver': {
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    },
    'node': {
      'tryExtensions': ['.js', '.json', '.node', '.ts', '.d.ts']
    }
  }
};
