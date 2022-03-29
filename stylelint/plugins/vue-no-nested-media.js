/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable import/no-extraneous-dependencies */
const stylelint = require('stylelint');

const ruleName = 'fands/vue-no-nested-media';
const messages = stylelint.utils.ruleMessages(ruleName, {
  expected:
    'Nested media rules inside of selectors are restricted, please move media rules to styles root',
});

function getExtensionFromFileName(fileName) {
  return fileName.split('.').pop();
}

function isVueFileName(fileName) {
  return getExtensionFromFileName(fileName) === 'vue';
}

module.exports = stylelint.createPlugin(
  ruleName,
  () =>
    function lint(postcssRoot, postcssResult) {
      if (!isVueFileName(postcssRoot.source.input.file)) {
        return;
      }

      postcssRoot.walkAtRules('media', (atRule) => {
        if (atRule.parent.type !== 'root') {
          stylelint.utils.report({
            ruleName,
            result: postcssResult,
            message: messages.expected,
            node: atRule.parent,
            line: atRule.source.start.line,
            column: atRule.source.start.column,
          });
        }
      });
    }
);

module.exports.ruleName = ruleName;
module.exports.messages = messages;
