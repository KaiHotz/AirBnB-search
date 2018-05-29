/*eslint-disable*/
import React from 'react'
import PropTypes from 'prop-types'
import Ratings from '../Ratings'
import Image from '../UI/Image'
import './styles.scss'

const Listing = ({
  id,
  index,
  thumbnail_url,
  user_thumb,
  name,
  favorited,
  super_host,
  address,
  reviews_count,
  friends,
  price_formatted,
  onClick
}) => {
  return (
    <li
      className='listings-list-item'
      onClick={onClick}
      role='list-item'
    >
      <div className='listings-list-item--thumb'>
        <Image
          src={thumbnail_url}
          alt='thumb'
          fallbackSrc='assets/images/default.jpg'
        />
        <span className='listings-list-item--thumb-index'>{index + 1}</span>
      </div>
      <div className='listings-list-item--info'>
        <h2>
          {name}
          <span
            style={{ backgroundImage: 'url(assets/images/stars.png)' }}
            className={favorited ? 'stared' : 'unStared'}
          />
        </h2>
        <p className='address'>{address}</p>
        <Image
          className='user_thumb'
          src={user_thumb}
          alt='user_thumb'
          fallbackSrc='assets/images/user.png'
        />
        <Ratings
          reviews={reviews_count}
          friends={friends}
          superhost={super_host}
        />
      </div>
      <div className='price'>
        <h1>{price_formatted}</h1>
        <p>Per Night</p>
      </div>
    </li>
  )
}

Listing.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  reviews_count: PropTypes.number.isRequired,
  friends: PropTypes.number.isRequired,
  thumbnail_url: PropTypes.string.isRequired,
  user_thumb: PropTypes.string.isRequired,
  price_formatted: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
  super_host: PropTypes.bool.isRequired,
  address: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Listing
