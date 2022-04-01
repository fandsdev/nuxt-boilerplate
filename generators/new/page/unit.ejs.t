---
to: "pages/<%= h.changeCase.kebab(name) %>.spec.js"
---
<%
  const fileName = h.changeCase.kebab(name)
  const importName = h.changeCase.pascal(fileName) + 'Page'
%>import { shallowMount } from '@vue/test-utils';
<% if (useI18n) {
%>import <%= importName %>, { messages } from './<%= fileName %>.vue';
<% } else {
%>import <%= importName %> from './<%= fileName %>.vue';<% }
if (useI18n) {
%>import { setupI18nInstanceForMessages } from '~/test/utils/setup-i18n-instance-for-messages';

const i18n = setupI18nInstanceForMessages(messages);<%
} %>

describe('<%= importName %>', () => {
  let wrapper;

  function createComponent() {
    wrapper = shallowMount(<%= importName %>, {<% if (useI18n) { %> i18n <% } %>});
  }

  beforeEach(() => {
    createComponent();
  });

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
