import React from 'react'
import './styles.scss'

const Ratings = props => (
  <div className="ratings">
    {
      Object.keys(props).map(key => {
        if (props[key]) {
          return (
            <div
              key={key}
              className="ratings-item"
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
export default Ratings
