import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchListings } from '../actions'
import SearchBar from '@/src/components/SearchBar'
import Listings from '@/src/components/Listings'
import '@/styles/App.scss'

class App extends Component {
  componentDidMount () {
    this.props.fetchListings()
  }

  render () {
    return (
      <div className='App'>
        <SearchBar />
        <Listings
          listings={this.props.listings}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ listings }) => ({
  listings
})

export default connect(mapStateToProps, { fetchListings })(App)
