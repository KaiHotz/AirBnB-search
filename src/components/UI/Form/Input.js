import React from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'
import InputField from '../Input'

const Input = ({
  label, name, formik, ...rest
}) => {
  const { touched, errors, values } = formik
  const error = getIn(errors, name)

  return (
    <InputField
      name={name}
      label={label}
      value={getIn(values, name, '')}
      error={getIn(touched, name) && error}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      {...rest}
    />
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  formik: PropTypes.object.isRequired,
}

Input.defaultProps = {
  type: 'text',
  label: null,
}

export default connect(Input)
