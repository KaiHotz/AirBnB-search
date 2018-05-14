import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePickerCmp from 'react-datepicker'
import moment from 'moment'
import cx from 'classnames'
import 'react-datepicker/dist/react-datepicker.css'

class DatePicker extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }

  static defaultProps = {
    minDate: new Date().getTime(),
    maxDate: null,
    label: null,
    placeholder: 'DD.MM.YYYY',
    error: null,
    disabled: false,
    required: false,
    value: null,
    className: null
  }

  handleChangeRaw = e => {
    this.handleUpdate(e, this.props.onChange)
  }

  handleUpdate = (args, event) => {
    // eslint-disable-next-line
    const validChars = /^\d{0,2}[.\/]{0,1}\d{0,2}[.\/]{0,1}\d{0,4}$/
    const { value } = args.target
    if (!validChars.test(value)) {
      args.preventDefault()
      return
    }

    const momentDate = moment(
      value,
      ['DD.MM.YYYY', 'D.M.YYYY'],
      true
    )

    event({
      target: {
        name: this.props.name,
        value: momentDate.isValid() ? momentDate.format('YYYY-MM-DD') : ''
      }
    })
  }

  handleChange = momentDate => {
    this.props.onChange({
      target: {
        name: this.props.name,
        value: momentDate ? momentDate.format('YYYY-MM-DD') : ''
      }
    })
  }

  handleFocus = name => {
    document.getElementById(name).focus()
  }

  render () {
    const {
      disabled,
      error,
      label,
      placeholder,
      name,
      value,
      minDate,
      maxDate,
      required,
      className,
      ...rest
    } = this.props

    const momentDate = moment(value)

    return (
      <div className={cx('datePicker-wrapper', className, {'error': error})}>
        {
          label &&
            <label
              htmlFor={name}
              onClick={() => this.handleFocus(name)}
            >
              {`${label}${required ? ' *' : ''}`}
            </label>
        }
        <DatePickerCmp
          id={name}
          name={name}
          selected={momentDate.isValid() ? momentDate : null}
          minDate={moment(minDate)}
          maxDate={moment(maxDate)}
          placeholderText={error || placeholder}
          dateFormat={['DD.MM.YYYY', 'D.M.YYYY']}
          disabledKeyboardNavigation
          {...rest}
          onChangeRaw={this.handleChangeRaw}
          onChange={this.handleChange}
          onBlur={this.handleChangeRaw}
          disabled={disabled}
        />
      </div>
    )
  }
}

export default DatePicker
