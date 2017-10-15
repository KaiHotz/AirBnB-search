import React, { Component } from 'react'

class Image extends Component {
  changeSrc = newSrc => {
    this.img.src = newSrc
  }

  render () {
    const { src, fallbackSrc, alt, ...other } = this.props
    return (
      <img src={src}
        onError={() => this.changeSrc(fallbackSrc)}
        ref={el => this.img = el}
        alt={alt}
        {...other} />
    )
  }
}

export default Image
