import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectComponent from '../Select'
import { get } from '../../../utils/helper'

class Select extends Component {
  onChange = event => {
    const { formik } = this.context
    const { name, value } = event.target

    formik.setFieldValue(name, value)
    formik.setFieldTouched(name, true)
  }

  render () {
    const {
      label,
      name,
      options,
      ...rest
    } = this.props
    const { formik } = this.context
    const { touched, errors, values } = formik
    const error = get(errors, name)
    return (
      <SelectComponent
        name={name}
        label={label}
        options={options}
        selected={get(values, name)}
        error={get(touched, name) && error}
        onChange={this.onChange}
        {...rest}
      />
    )
  }
}

Select.contextTypes = {
  formik: PropTypes.shape({})
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  })).isRequired,
  label: PropTypes.string
}

Select.defaultProps = {
  label: null
}

export default Select
