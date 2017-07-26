import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Listings from './Listings'
import '../styles/App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <SearchBar />
        <Listings />
      </div>
    )
  }
}

export default App
