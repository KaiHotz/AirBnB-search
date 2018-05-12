import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Button = ({
  className,
  onClick,
  type,
  imgSrc,
  content
}) => (
  <button
    className={cx('btn', className)}
    onClick={onClick}
    type={type}
  >
    {content}
    {
      imgSrc &&
        <img
          src={imgSrc}
          alt='btn icon'
        />
    }
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  imgSrc: PropTypes.string,
  content: PropTypes.string
}

Button.defaultProps = {
  className: null,
  type: 'button',
  imgSrc: null,
  content: null
}

export default Button
