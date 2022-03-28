import { shallowMount } from '@vue/test-utils';
import TheNavbar from './the-navbar.vue';

describe('TheNavbar', () => {
  let wrapper;

  function createComponent() {
    wrapper = shallowMount(TheNavbar, {});
  }

  beforeEach(() => {
    createComponent();
  });

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
