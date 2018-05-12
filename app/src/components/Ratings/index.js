import React from 'react'
import './styles.scss'

const Ratings = (props) => {
  return (
    <div className='ratings'>
      {
        Object.keys(props).map((key, i) => {
          if (props[key] || props[key] !== 0) {
            return (
              <div
                key={i}
                className='ratings-item'
              >
                <div
                  className={key}
                  style={{ backgroundImage: 'url(assets/images/badges.png)' }}
                >
                  <p>{props[key]}</p>
                </div>
                <p>{key}</p>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default Ratings
