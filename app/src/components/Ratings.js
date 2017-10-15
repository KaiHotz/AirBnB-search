import React from 'react'
import '@/styles/Ratings.scss'

const renderRatings = (props) => {
  return Object.keys(props).map((key, i) => {
    if (props[key] || props[key] !== 0) {
      return (
        <div
          key={i}
          className='ratings-item'
        >
          <div
            className={key}
            style={{backgroundImage: 'url(images/badges.png)'}}
          >
            {props[key]}
          </div>
          <p>{key}</p>
        </div>
      )
    }
  })
}

const Ratings = (props) => {
  return (
    <div className='ratings'>
      { renderRatings(props) }
    </div>
  )
}

export default Ratings
