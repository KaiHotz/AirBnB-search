import React from 'react'
import { shallow } from 'enzyme'

import Select from './index'

const baseProps = {
  name: 'customSelect',
  placeholder: 'Placeholder',
  options: [
    { value: '0', label: 'Option 1' },
    { value: '1', label: 'Option 2' },
    { value: '2', label: 'Option 3' },
  ],
  selected: '',
  onChange: jest.fn(),
}

describe('<Select />', () => {
  it('should render', () => {
    const wrapper = shallow(<Select {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'customClass',
    }
    const wrapper = shallow(<Select {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should show error', () => {
    const props = {
      ...baseProps,
      error: 'This is an ErrorMsg',
    }
    const wrapper = shallow(<Select {...props} />)

    expect(wrapper.hasClass('error')).toBe(true)
  })
})
