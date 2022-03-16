---
to: "utils/<%= h.changeCase.kebab(name) %>.js"
---
<%
  const fileName = h.changeCase.kebab(name);
  const importName = h.changeCase.camel(fileName);
%>export function <%= importName %>() {
  return 'ω';
}
