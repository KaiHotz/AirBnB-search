import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'
import DatePickerComponent from '../DatePicker'

class DatePicker extends Component {
  onChange = event => {
    const { formik, name } = this.props
    const { value } = event.target

    formik.setFieldValue(name, value)
    formik.setFieldTouched(name, true)
  }

  render() {
    const {
      disabled,
      label,
      required,
      name,
      placeholder,
      formik,
      ...rest
    } = this.props
    const { touched, errors, values } = formik
    const error = getIn(errors, name)

    return (
      <DatePickerComponent
        name={name}
        label={label}
        value={getIn(values, name)}
        error={getIn(touched, name) && error}
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

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  formik: PropTypes.object.isRequired,
}

DatePicker.defaultProps = {
  label: null,
  placeholder: 'DD.MM.YYYY',
  disabled: false,
  required: false,
}

export default connect(DatePicker)
