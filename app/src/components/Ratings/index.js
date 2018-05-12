import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Ratings = (props) => (
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

Ratings.propTypes = {
  friends: PropTypes.number,
  reviews: PropTypes.number,
  superhost: PropTypes.bool
}

Ratings.defaultProps = {
  friends: 0,
  reviews: 0,
  superhost: false
}

export default Ratings
