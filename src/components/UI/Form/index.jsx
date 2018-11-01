import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'

import Input from './Input'
import DatePicker from './DatePicker'
import Select from './Select'

const Form = ({ children, formik, ...rest }) => (
  <form onSubmit={formik.handleSubmit} {...rest}>
    {children}
  </form>
)

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

export default connect(Form)
