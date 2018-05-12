import React from 'react'
import { shallow, mount } from 'enzyme'
import Button from './index'

const baseProps = {
  onClick: jest.fn()
}

describe('<Button />', () => {
  it('should render', () => {
    const wrapper = shallow(<Button {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should display content with icon', () => {
    const props = {
      ...baseProps,
      imgSrc: 'assets/images/search.png',
      content: 'Content'
    }
    const wrapper = mount(<Button {...props} />)

    expect(wrapper.text().includes(props.content)).toBeTruthy()
    expect(wrapper.find('img').length).toBeTruthy()
  })

  it('should call onClick', () => {
    const wrapper = shallow(<Button {...baseProps} />)
    wrapper.simulate('click')

    expect(baseProps.onClick).toHaveBeenCalled()
  })

  it('should be disableable', () => {
    const wrapper = shallow(<Button disabled {...baseProps} />)

    expect(wrapper.prop('disabled')).toBe(true)
    expect(wrapper.prop('className').includes('disabled'))
  })

  it('should have custom type', () => {
    const props = {
      ...baseProps,
      type: 'submit'
    }
    const wrapper = shallow(<Button {...props} />)

    expect(wrapper.prop('type')).toBe(props.type)
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom'
    }
    const wrapper = shallow(<Button {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })
})
