import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import DatePicker from './DatePicker'
import Select from './Select'

const Form = ({ children, ...rest }, context) => {
  const { formik } = context

  return (
    <form onSubmit={formik.handleSubmit} {...rest}>
      {children}
    </form>
  )
}

Form.contextTypes = {
  formik: PropTypes.shape({}),
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
}

Form.defaultProps = {
  onSubmit: () => { },
}

Form.Input = Input
Form.DatePicker = DatePicker
Form.Select = Select

export default Form
