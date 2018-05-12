import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchListings } from '../../actions'
import Loader from '../../components/UI/Loader'
import Listing from '../../components/Listing'
import './styles.scss'

class Listings extends Component {
  componentDidMount () {
    this.props.fetchListings()
  }

  render () {
    const { listings } = this.props
    if (!listings || listings.length === 0) return <Loader />
    return (
      <div className='listings'>
        <div className='listings-total'>
          {this.props.listings.length} Results
        </div>
        <div className='listings-list'>
          <ul>
            {
              listings &&
                listings.map((listing, index) => (
                  <Listing
                    key={listing.id}
                    index={index}
                    {...listing}
                  />
                ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ listings }) => ({
  listings
})

export default connect(mapStateToProps, { fetchListings })(Listings)
