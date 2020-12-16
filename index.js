module.exports = {
  extends: [
    "eslint:recommended",
    "standard",
    "plugin:import/recommended",
    "plugin:jest/recommended",
    "plugin:json/recommended",
    "plugin:node/recommended",
    "plugin:promise/recommended",
    "plugin:sonarjs/recommended",
    "plugin:prettier/recommended"
  ],
  env: {
    node: true,
    es6: true,
    jest: true,
    "jest/globals": true
  },
  globals: {
    expect: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  rules: {
    indent: ["error", 2],
    "max-len": [
      "error",
      {
        code: 120,
        tabWidth: 2,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      },
    ],
    "no-async-promise-executor": "warn",
    "no-console": "warn",
    "no-empty": "error",
    "no-import-assign": "error",
    "no-lonely-if": "error",
    "no-multiple-empty-lines": "error",
    "no-sync": "warn",
    "no-undef": "error",
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used"
      },
    ],
    "no-useless-escape": "warn",
    "no-var": "error",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: ["class", "function", "export"]
      },
    ],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-promise-reject-errors": "off",
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: false
      },
    ],
    "require-await": "error",
    semi: ["error", "always"],
    "import/no-commonjs": "error",
    "import/no-cycle": "error",
    "jest/no-mocks-import": "off",
    "node/no-unsupported-features/es-syntax": "off",
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true
      },
    ],
    "sonarjs/prefer-immediate-return": "warn"
  },
  settings: {}
};
