module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': '@vue/vue2-jest',
  },
  globals: {
    'vue-jest': {
      transform: {
        postcss: './test/vue-jest-custom-transformers/postcss-transformer.js',
      },
    },
  },
  testEnvironment: 'jsdom',
  clearMocks: true,
  resetMocks: true,
};
