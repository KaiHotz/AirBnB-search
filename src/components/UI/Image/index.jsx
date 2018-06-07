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

export default Image
