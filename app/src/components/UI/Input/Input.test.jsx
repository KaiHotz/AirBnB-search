import React from 'react'
import { shallow, mount } from 'enzyme'

import Input from './index'

const baseProps = {
  name: 'input name',
  onChange: jest.fn()
}

describe('<Input />', () => {
  it('should render', () => {
    const wrapper = shallow(<Input {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom'
    }
    const wrapper = shallow(<Input {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should have custom type', () => {
    const props = {
      ...baseProps,
      type: 'text'
    }
    const wrapper = mount(<Input {...props} />)

    expect(wrapper.find('input').prop('type')).toBe(props.type)
  })

  it('should call onChange', () => {
    const wrapper = mount(<Input {...baseProps} />)
    wrapper.find('input').simulate('change')

    expect(baseProps.onChange).toHaveBeenCalled()
  })

  it('should show error', () => {
    const props = {
      ...baseProps,
      error: 'This is an ErrorMsg'
    }
    const wrapper = shallow(<Input {...props} />)

    expect(wrapper.hasClass('error')).toBe(true)
  })
})
