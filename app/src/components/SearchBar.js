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
      checkIn: '',
      checkOut: '',
      guests: 1,
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

  onSubmit() {
    const { location, checkIn, checkOut, guests } = this.state
    const searchUrl = 'http://www.airbnb.com/search?location='

    if(location === '' || checkOut === '') {

      alert('Please complete all the fields')

    } else {

      let myCheckIn = moment(checkIn._d).format('MM/DD/YYYY')
      let myCheckOut = moment(checkOut._d).format('MM/DD/YYYY')

      window.open(`${searchUrl}${location}&checkin=${myCheckIn}&checkout=${myCheckOut}&guests=${guests}`, '_blank')
    }
  }

  render() {
    const {location, checkIn, checkOut } = this.state
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
            onClick={() => this.onSubmit()}
            type='button'
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
              placeholderText='DD/MM/YYYY'
              dateFormat="DD/MM/YYYY"
              selected={checkIn}
              minDate={moment().add(1, "days")}
              onChange={(date) => this.setState({checkIn: moment(date)})}
            />
          </div>
          <div className='search-booking--date'>
            <p>Check Out</p>
            <DatePicker
              className="search-booking--date-picker"
              placeholderText='DD/MM/YYYY'
              dateFormat="DD/MM/YYYY"
              selected={checkOut}
              minDate={moment(this.state.checkIn._d).add(2, "days")}
              onChange={(date) => this.setState({checkOut: moment(date)})}
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
