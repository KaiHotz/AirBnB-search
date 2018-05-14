import React from 'react'
import PropTypes from 'prop-types'
import InputField from '../Input'
import { get } from '../../../utils/helper'

const Input = ({ label, name, ...rest }, context) => {
  const { formik } = context
  const { touched, errors, values } = formik
  const error = get(errors, name)

  return (
    <InputField
      name={name}
      label={label}
      value={get(values, name, '')}
      error={get(touched, name) && error}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      {...rest}
    />
  )
}

Input.contextTypes = {
  formik: PropTypes.shape({})
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string
}

Input.defaultProps = {
  type: 'text',
  label: null
}

export default Input
