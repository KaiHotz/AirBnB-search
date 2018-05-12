import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Input = ({
  type,
  disabled,
  error,
  label,
  name,
  onChange,
  placeholder,
  required,
  ...rest
}) => (
  <div className={cx('input-wrapper', {'error': error})}>
    {
      label &&
      <label htmlFor={name}>
        {`${label}${required ? ' *' : ''}`}
      </label>
    }
    <input
      id={name}
      name={name}
      type={type}
      placeholder={error || placeholder}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    />
  </div>
)

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired
}

Input.defaultProps = {
  type: 'text',
  label: null,
  error: null,
  placeholder: null,
  disabled: false,
  required: false
}

export default Input
