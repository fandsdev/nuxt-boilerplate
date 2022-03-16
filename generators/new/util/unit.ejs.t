---
to: "utils/<%= h.changeCase.kebab(name) %>.spec.js"
---
<%
  const fileName = h.changeCase.kebab(name);
  const importName = h.changeCase.camel(fileName);
%>import { <%= importName %> } from './<%= fileName %>';

describe('<%= importName %>', () => {
  it('says ω', () => {
    const result = <%= importName %>();
    expect(result).toEqual('ω');
  });
});
