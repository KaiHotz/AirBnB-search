import React from 'react'
import image from '../../../assets/images/loading_animation_circle.svg'
import './styles.scss'

const Loader = () => {
  return (
    <div className='loading-animation'>
      <div className='loader-icon'>
        <img src={image} />
      </div>
    </div>
  )
}

export default Loader
