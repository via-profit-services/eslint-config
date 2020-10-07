module.exports = {
  root: true,
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'quote-props': ['error', 'as-needed'],
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],
    'no-var': 'error',
    'no-useless-constructor': 'warn',
    'no-dupe-class-members': 'error',
    'prefer-spread': 'warn',
    'no-const-assign': 'error',
    'constructor-super': 'error',
    'no-eval': 'error',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-extend-native': 'error',
    'no-global-assign': ['error', { exceptions: [] }],
    'consistent-return': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 1 }],
    'no-new': 'warn',

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],

    'no-new-func': 'error',
    'no-multi-str': 'error',
    'no-new-wrappers': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-multi-spaces': ['warn', {
      ignoreEOLComments: false,
    }],
    'object-curly-spacing': ['error', 'always'],
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ],
    }],
    // disallow certain object properties
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      }, {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      }, {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      }, {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      }, {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      }, {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      }, {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      }, {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      }, {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-extra-semi': 'warn',
    'no-constructor-return': 'off',
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'no-case-declarations': 'error',
    'no-alert': 'error',
    'guard-for-in': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'dot-notation': ['warn', { allowKeywords: true }],
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
    'valid-typeof': ['error', { requireStringLiterals: true }],

    quotes: ['warn', 'single'],

    // Expected blank line before return statement
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],

    // require use of the second argument for parseInt()
    radix: 'error',
    '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: true, typedefs: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/no-duplicates': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-mutable-exports': 'error',
    'import/first': 'error',
    'import/no-self-import': 'error',
    'import/prefer-default-export': 'warn',
    'import/no-named-as-default': 'error',
    'import/order': ['warn', {
      groups: [['builtin', 'external', 'internal']],
      'newlines-between': 'always-and-inside-groups',
    }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],
    'import/max-dependencies': ['warn', { max: 10 }],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'max-len': ['warn', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
  },
  globals: {
    fetch: false,
  },
};
