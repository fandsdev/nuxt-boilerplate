import { shallowMount } from '@vue/test-utils';
import BaseIcon from './_base-icon.vue';

describe('BaseIcon', () => {
  it('should contain use tag with a correct href based on name prop', () => {
    const ICON_NAME = 'soar-boar';
    const EXPECTED_HREF = `#${ICON_NAME}`;
    const wrapper = shallowMount(BaseIcon, {
      propsData: {
        name: ICON_NAME,
      },
    });

    const useTagWrapper = wrapper.find('use');
    expect(useTagWrapper.attributes().href).toBe(EXPECTED_HREF);
  });
});
