import React from 'react'
import { shallow, mount } from 'enzyme'

import DatePicker from './index'

const baseProps = {
  name: 'DatePicker',
  onChange: jest.fn()
}

describe('<DatePicker />', () => {
  it('should render', () => {
    const wrapper = shallow(<DatePicker {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'customDatepicker'
    }
    const wrapper = mount(<DatePicker {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should call onChange', () => {
    const props = {
      ...baseProps,
      onChange: jest.fn()
    }
    const wrapper = mount(<DatePicker {...props} />)

    wrapper.find('input').simulate('change')

    expect(props.onChange).toHaveBeenCalled()
  })

  it('should show error', () => {
    const props = {
      ...baseProps,
      error: 'This is an ErrorMsg'
    }
    const wrapper = shallow(<DatePicker {...props} />)

    expect(wrapper.hasClass('error')).toBe(true)
  })
})
