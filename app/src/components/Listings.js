import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchListings } from '../actions'
import Image from './Image'
import '../styles/Listings.css'

class Listings extends Component {
  componentDidMount () {
    this.props.fetchListings()
  }

  renderListings () {
    return this.props.listings.map((listing, index) => {
      const { thumbnail_url, name, favorited, address, price_formatted } = listing

      const favStar = favorited ? 'stared' : 'unStared'

      return (
        <li key={index}>
          <div className='listings-list--thumb'>
            <Image
              src={thumbnail_url}
              ref={img => this.img = img}
              alt='thumb'
              fallbackSrc='images/default.jpg'
            />
            <span className='listings-list--thumb-index'>{index + 1}</span>
          </div>
          <div className='listings-list--info'>
            <h2>
              {name}
              <span
                style={{backgroundImage: 'url(images/stars.png)'}}
                className={favStar}
              />
            </h2>
            <p>{address}</p>
          </div>
          <div className='price'>
            <h1>{price_formatted}</h1>
            <p>Per Night</p>
          </div>
        </li>
      )
    })
  }

  render () {
    return (
      <div className='listings'>
        <div className='listings-total'>
          { this.props.listings.length } Results
        </div>
        <div className='listings-list'>
          <ul>
            {this.renderListings()}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { listings: state.listings }
}

export default connect(mapStateToProps, { fetchListings })(Listings)
