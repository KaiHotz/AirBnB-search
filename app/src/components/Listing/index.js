
/*eslint-disable*/
import React from 'react'
import Ratings from '../Ratings'
import Image from '../UI/Image'
import './styles.scss'

const Listing = ({
  id,
  index,
  thumbnail_url,
  name,
  favorited,
  address,
  user_thumb,
  reviews_count,
  friends,
  super_host,
  price_formatted
}) => {
  return (
    <li
      className='listings-list-item'
      onClick={() => window.open(`https://airbnb.com/rooms/${id}`, '_blank')}
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
            style={{ backgroundImage: 'url(/assets/images/stars.png)' }}
            className={favorited ? 'stared' : 'unStared'}
          />
        </h2>
        <p>{address}</p>
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

export default Listing
