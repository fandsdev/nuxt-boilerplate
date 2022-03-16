---
to: "components/<%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>.vue"
---
<%
if (blocks.indexOf('script') !== -1) {
%><script><% if (useI18n) { %>
export const messages = {
  ru: {},
};
<% } %>
export default {
  <% if (useI18n) { %>i18n: { messages },<% }
  if (blocks.indexOf('template') === -1) { %>render(h) {
    return <div></div>
  }<% } %>
};
</script>
<%
}

if (blocks.indexOf('template') !== -1) {
%>
<template>
  <div></div>
</template>
<%
}

if (blocks.indexOf('style') !== -1) {
%>
<style lang="postcss" module>
</style><%
}
%>
