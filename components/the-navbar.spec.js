import { shallowMount } from '@vue/test-utils';
import { setupI18nInstanceForMessages } from '~/test/utils/setup-i18n-instance-for-messages';
import TheNavbar, { messages } from './the-navbar.vue';

const i18n = setupI18nInstanceForMessages(messages);

describe('TheNavbar', () => {
  let wrapper;

  function createComponent() {
    wrapper = shallowMount(TheNavbar, { i18n });
  }

  beforeEach(() => {
    createComponent();
  });

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('declares itself as the navbar', () => {
    expect(wrapper.text()).toContain('Navbar');
  });
});
