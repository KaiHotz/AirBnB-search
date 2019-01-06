import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Button = ({
  className,
  onClick,
  type,
  imgSrc,
  content,
  disabled,
}) => (
  <button
    className={cx('btn', { diabled: disabled }, className)}
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    {content}
    {
      imgSrc
        && (
        <img
          src={imgSrc}
          alt="btn icon"
        />
        )
    }
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  imgSrc: PropTypes.string,
  content: PropTypes.string,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  className: null,
  type: 'button',
  imgSrc: null,
  content: null,
  disabled: false,
}

export default Button
