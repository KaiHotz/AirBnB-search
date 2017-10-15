import React from 'react'
import '../styles/Ratings.css'

const renderRatings = (props) => {
  return Object.keys(props).map((key, index) => {
    if (props[key] && !props[key] === 0) {
      return (
        <div key={index} className='ratings-item'>
          <div className={key} style={{backgroundImage: 'url(images/badges.png)'}}>
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
