import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/SearchBar.css'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      location: '',
      checkIn: moment(),
      checkOut: moment(),
      guests: null,
      guestArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    }
  }

  renderGuests = () => {
    return this.state.guestArr.map((guests, index) => {
      return (
        <option key={index} value={guests}>{guests}</option>
      )
    })
  }

  render() {

    const {location } = this.state

    return (
      <div className='search'>
        <div className='search-location'>
          <input
            className='search-location--input'
            type='text'
            placeholder='City'
            value={location}
            onChange={(event) => this.setState({location: event.target.value})}
          />
          <button
            className='search-location--button'
            type='submit'
          >
          Search
          <img src='images/search.png' alt='search icon' />
          </button>
        </div>
        <div className='search-booking'>
          <div className='search-booking--date'>
            <p>Check In</p>
            <DatePicker
              className="search-booking--date-picker"
              dateFormat="DD/MM/YYYY"
              selected={this.state.checkIn}
              onChange={(date) => this.setState({checkIn: date})}
            />
          </div>
          <div className='search-booking--date'>
            <p>Check Out</p>
            <DatePicker
              className="search-booking--date-picker"
              dateFormat="DD/MM/YYYY"
              selected={this.state.checkOut}
              onChange={(date) => this.setState({checkOut: date})}
            />
          </div>
          <div className='search-guests'>
            <p>Guests</p>
            <select
              onChange={(event) => this.setState({guests: event.target.value})}
            >
              {this.renderGuests()}
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
