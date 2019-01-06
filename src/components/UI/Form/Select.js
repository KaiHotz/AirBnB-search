import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'
import SelectComponent from '../Select'

class Select extends Component {
  onChange = event => {
    const { formik } = this.props
    const { name, value } = event.target

    formik.setFieldValue(name, value)
    formik.setFieldTouched(name, true)
  }

  render() {
    const {
      label,
      name,
      options,
      formik,
      ...rest
    } = this.props
    const { touched, errors, values } = formik
    const error = getIn(errors, name)

    return (
      <SelectComponent
        name={name}
        label={label}
        options={options}
        selected={getIn(values, name)}
        error={getIn(touched, name) && error}
        onChange={this.onChange}
        {...rest}
      />
    )
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  })).isRequired,
  label: PropTypes.string,
  formik: PropTypes.object.isRequired,
}

Select.defaultProps = {
  label: null,
}

export default connect(Select)
