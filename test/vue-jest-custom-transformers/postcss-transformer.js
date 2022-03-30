/* eslint-disable import/no-extraneous-dependencies */
const postcss = require('postcss');
const postcssNesting = require('postcss-nesting');

/*
  All the postcss plugins that can break tests should be called in this transformer.
  You might need to clear jest cache for changes in this file to work.
 */
module.exports = {
  process(content) {
    return postcss([postcssNesting()]).process(content).css;
  },
};
