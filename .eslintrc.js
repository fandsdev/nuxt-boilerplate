module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier-vue/recommended',
    'plugin:vuejs-accessibility/recommended',
    'plugin:@intlify/vue-i18n/recommended',
    'airbnb-base',
    'prettier',
  ],
  plugins: ['vue-scoped-css'],
  rules: {
    'no-alert': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
    'require-await': 'error',
    'vue-scoped-css/enforce-style-type': ['error', { allows: ['module'] }],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/order': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/component-name-in-template-casing': 'error',
    'vue/dot-location': ['error', 'property'],
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/no-boolean-default': ['error', 'default-false'],
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/padding-line-between-blocks': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/v-on-function-call': 'error',
    'vue/custom-event-name-casing': ['error'],
    'vue/no-v-html': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/prefer-module': 'off',
    '@intlify/vue-i18n/no-raw-text': [
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      {
        ignoreText: [':', '?', '(', ')'],
      },
    ],
    '@intlify/vue-i18n/no-missing-keys': 'off', // not working with per component i18n option
    '@intlify/vue-i18n/no-v-html': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../*', 'lodash.*'],
        paths: [
          {
            name: 'lodash',
            message: "Please import methods directly (like 'lodash/debounce').",
          },
          {
            name: '@vue/test-utils',
            importNames: ['mount'],
            message: 'Please use shallowMount instead.',
          },
        ],
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          props: false,
          params: false,
          req: false,
          res: false,
        },
      },
    ],
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'sonarjs/prefer-immediate-return': 'off',
  },
  overrides: [
    {
      files: ['*.spec.js'],
      rules: {
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/no-new-array': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-identical-functions': 'off',
        'unicorn/no-array-callback-reference': 'off', // falsely triggers for wrapper.find
      },
    },
    {
      files: ['*.vue'],
      rules: {
        'no-underscore-dangle': 'off', // we use dangles for modifier classes in styles
      },
    },
    {
      files: ['*.vue', './plugins/**', './middleware/**'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['./store/**', './store-lib/**'],
      rules: {
        'no-shadow': [
          'error',
          {
            allow: ['state', 'getters'],
          },
        ],
        'no-param-reassign': [
          'error',
          { props: true, ignorePropertyModificationsFor: ['state'] },
        ],
      },
    },
    {
      files: ['./pages/**', './layouts/**'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': __dirname,
            },
          },
        },
      },
    },
  },
};
