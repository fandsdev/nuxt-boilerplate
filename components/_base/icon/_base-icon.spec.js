import { shallowMount } from '@vue/test-utils';
import BaseIcon from './_base-icon.vue';

describe('BaseIcon', () => {
  it('should contain use tag with a correct href based on name prop', () => {
    const iconName = 'soar-boar';
    const expectedHref = `#${iconName}`;
    const wrapper = shallowMount(BaseIcon, {
      propsData: {
        name: iconName,
      },
    });

    const useTagWrapper = wrapper.find('use');
    expect(useTagWrapper.attributes().href).toBe(expectedHref);
  });
});
