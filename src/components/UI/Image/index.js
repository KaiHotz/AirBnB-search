import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Image extends Component {
  setImgRef = element => {
    this.img = element
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
        ref={this.setImgRef}
        alt={alt}
        {...rest}
      />
    )
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

Image.defaultProps = {
  alt: 'Image',
}

export default Image
