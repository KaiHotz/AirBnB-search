import React from 'react'
import image from './loading_animation_circle.svg'
import './styles.scss'

const Loader = () => (
  <div className="loading-animation">
    <div className="loader-icon">
      <img src={image} alt="thumbNail" />
    </div>
  </div>
)

export default Loader
