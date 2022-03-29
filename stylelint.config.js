module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
    'stylelint-config-css-modules',
  ],
  plugins: ['./stylelint/plugins/vue-no-nested-media.js'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    // Enforce camelCase for classes and ids, to work better
    // with CSS modules
    'selector-class-pattern': /^[\d_a-z]\w*(-(enter|leave)(-(active|to))?)?$/,
    'selector-id-pattern': /^[\d_a-z]\w*$/,
    // Limit the number of universal selectors in a selector,
    // to avoid very slow selectors
    'selector-max-universal': 1,
    // Disallow allow global element/type selectors in scoped modules
    'selector-max-type': [0, { ignore: ['child', 'descendant', 'compounded'] }],
    // Enforce consistent media rules positioning in vue files
    'fands/vue-no-nested-media': true,
  },
};
