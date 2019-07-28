/* eslint-env jest */
import { shallowMount } from '@vue/test-utils';

import ReviewForm from '@/components/ReviewForm';

describe('ReviewForm.vue', () => {
  it('should emit save-review', () => {
    expect.assertions(1);
    const wrapper = shallowMount(ReviewForm);

    wrapper.find('[data-test=review-form-content]').setValue('Great Car');

    wrapper.find('form').trigger('submit');

    expect(wrapper.emitted('save-review')[0]).toEqual([
      {
        content: 'Great Car'
      }
    ]);
  });
});
