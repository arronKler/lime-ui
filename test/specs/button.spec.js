import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Button from '../../src/packages/button'

describe('Button.vue', () => {
  it('type primary', done => {
    const wrapper = mount(Button, {
      propsData: {
        type: "primary"
      }
    })
    
    let buttonElm = wrapper.element;
    expect(buttonElm.classList.contains('lime-button-primary')).to.be.true;
    done()
  })

  it('size large', done => {
    const wrapper = mount(Button, {
      propsData: {
        size: "large"
      }
    })
    expect(wrapper.props('size')).equal('large');
    done()
  })
})