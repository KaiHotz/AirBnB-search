import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Image extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    fallbackSrc: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }

  static defaultProps = {
    alt: 'Image',
  }

  changeSrc = newSrc => () => {
    this.img.src = newSrc
  }

  render() {
    const {
      src, fallbackSrc, alt, ...rest
    } = this.props

    return (
      <img
        src={src}
        onError={this.changeSrc(fallbackSrc)}
        ref={el => (this.img = el)}
        alt={alt}
        {...rest}
      />
    )
  }
}

export default Image
