import React from 'react'

const Image = ({src, fallbackSrc, alt, ...other}) => {
  let element
  const changeSrc = newSrc => {
    element.src = newSrc
  }
  return (
    <img src={src}
      onError={() => changeSrc(fallbackSrc)}
      ref={el => element = el}
      alt={alt}
      {...other} />
  )
}

export default Image
