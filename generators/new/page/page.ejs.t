---
to: "pages/<%= h.changeCase.kebab(name) %>.vue"
---
<%
  const fileName = h.changeCase.kebab(name);
  const importName = h.changeCase.pascal(fileName);
  const titleName = h.changeCase.title(name);
%><script><% if (useI18n) { %>
export const messages = {
  ru: {},
};
<% } %>
export default {
  <% if (useI18n) { %>i18n: { messages },
  <% } %>head() {
    return {
      title: '<%= titleName %>',
      meta: [{ name: 'description', content: 'The <%= titleName %> page.' }],
    };
  },
};
</script>

<template>
  <div></div>
</template>
<%

if (useStyles) { %>
<style lang="postcss" module>
</style>
<% } %>
