import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { fetchListings } from '../../actions'
import Loader from '../../components/UI/Loader'
import Listing from '../../components/Listing'
import './styles.scss'

class Listings extends Component {
  static propTypes = {
    listings: PropTypes.array,
    fetchListings: PropTypes.func.isRequired,
  }

  static defaultProps = {
    listings: [],
  }

  componentDidMount() {
    const { fetchListings } = this.props
    fetchListings()
  }

  render() {
    const { listings } = this.props
    if (!listings || !listings.length) return <Loader />

    return (
      <div className="listings">
        <div className="listings-total">
          {listings.length}
          {' '}
          Results
        </div>
        <div className="listings-list">
          {
            _.sortBy(listings, 'name').map((listing, index) => (
              <Listing
                key={listing.id}
                index={index}
                url={`https://airbnb.com/rooms/${listing.id}`}
                {...listing}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ listings }) => ({
  listings,
})

export default connect(mapStateToProps, { fetchListings })(Listings)
