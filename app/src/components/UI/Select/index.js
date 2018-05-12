import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Select = ({
  label,
  name,
  selected,
  onChange,
  placeholder,
  options,
  required,
  error,
  className
}) => (
  <div className={cx('select-wrapper', className, {'error': error})}>
    {
      label &&
        <label htmlFor={name}>
          {`${label}${required ? ' *' : ''}`}
        </label>
    }
    <select
      id={name}
      name={name}
      value={selected}
      onChange={onChange}
    >
      {
        placeholder &&
          <option value=''>
            {placeholder}
          </option>
      }
      {
        options.map(opt => {
          return (
            <option
              key={opt.label}
              value={opt.value}
            >
              {opt.label}
            </option>
          )
        })
      }
    </select>
  </div>
)

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  selected: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
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
  required: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string
}

Select.defaultProps = {
  label: null,
  placeholder: null,
  required: false,
  error: null,
  className: null
}

export default Select
