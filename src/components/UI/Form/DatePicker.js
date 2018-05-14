import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get } from '../../../utils/helper'
import DatePickerComponent from '../DatePicker'

class DatePicker extends Component {
  onChange = event => {
    const { formik } = this.context
    const { name, value } = event.target

    formik.setFieldValue(name, value)
    formik.setFieldTouched(name, true)
  }

  render () {
    const {
      disabled,
      label,
      required,
      name,
      placeholder,
      ...rest
    } = this.props
    const { formik } = this.context
    const { touched, errors, values } = formik
    const error = get(errors, name)

    return (
      <DatePickerComponent
        name={name}
        label={label}
        value={get(values, name)}
        error={get(touched, name) && error}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        {...rest}
        onChange={this.onChange}
        onBlur={this.onChange}
      />
    )
  }
}

DatePicker.contextTypes = {
  formik: PropTypes.shape({})
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool
}

DatePicker.defaultProps = {
  label: null,
  placeholder: 'DD.MM.YYYY',
  disabled: false,
  required: false
}

export default DatePicker
