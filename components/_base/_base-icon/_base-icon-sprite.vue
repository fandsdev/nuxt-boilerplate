<template>
  <svg
    width="0"
    height="0"
    style="display: none"
    data-svg-sprite
    v-html="$options.svgSprite"
  />
</template>

<script>
const svgContext = require.context(
  '!svg-inline-loader?' +
    'removeTags=true' + // remove title tags, etc.
    '&removeSVGTagAttrs=true' + // enable removing attributes
    '!./icons', // search this directory
  true, // search subdirectories
  /\w+\.svg$/i // only include SVG files
);

const extractIconIdFromFilename = (path) =>
  path.replace(/^\.\/(.*)\.\w+$/, '$1');

const changeSvgTagsToSymbolTagsWithId = (content, id) =>
  content.replace('<svg', `<symbol id="${id}"`).replace('svg>', 'symbol>');

const allSymbols = svgContext.keys().map((path) => {
  const content = svgContext(path);
  const id = extractIconIdFromFilename(path);
  return changeSvgTagsToSymbolTagsWithId(content, id);
});

const generateSpriteFromSymbols = (symbols) => symbols.join('\n');

export default {
  svgSprite: generateSpriteFromSymbols(allSymbols),
};
</script>
