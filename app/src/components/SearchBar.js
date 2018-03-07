import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import '@/styles/SearchBar.scss'

class SearchBar extends Component {
  state = {
    location: '',
    checkIn: moment(),
    checkOut: moment(),
    guests: 1,
    guestArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  }

  handleDateChange = dateInput => date => {
    this.setState({
      [dateInput]: moment(date)
    })
  }

  handleInputChange = input => event => {
    this.setState({
      [input]: event.target.value
    })
  }

  onSubmit = () => {
    const { location, checkIn, checkOut, guests } = this.state
    const searchUrl = 'http://www.airbnb.com/search'

    if (location === '' || checkOut === '') {
      window.alert('Please complete all the fields')
    } else {
      let myCheckIn = moment(checkIn._d).format('MM/DD/YYYY')
      let myCheckOut = moment(checkOut._d).format('MM/DD/YYYY')

      window.open(`${searchUrl}?location=${location}&checkin=${myCheckIn}&checkout=${myCheckOut}&guests=${guests}`, '_blank')
    }
  }

  render () {
    const { location, checkIn, checkOut } = this.state
    return (
      <div className='search'>
        <div className='search-location'>
          <input
            className='search-location--input'
            type='text'
            placeholder='City'
            value={location}
            onChange={this.handleInputChange('location')}
          />
          <button
            className='search-location--button'
            onClick={this.onSubmit}
            type='button'
          >
          Search
            <img
              src='images/search.png'
              alt='search icon'
            />
          </button>
        </div>
        <div className='search-booking'>
          <div className='search-booking--date'>
            <p>Check In</p>
            <DatePicker
              className='search-booking--date-picker'
              placeholderText='DD/MM/YYYY'
              dateFormat='DD/MM/YYYY'
              selected={checkIn}
              minDate={moment().add(1, 'days')}
              onChange={this.handleDateChange('checkIn')}
            />
          </div>
          <div className='search-booking--date'>
            <p>Check Out</p>
            <DatePicker
              className='search-booking--date-picker'
              placeholderText='DD/MM/YYYY'
              dateFormat='DD/MM/YYYY'
              selected={checkOut}
              minDate={moment(this.state.checkIn._d).add(2, 'days')}
              onChange={this.handleDateChange('checkOut')}
            />
          </div>
          <div className='search-guests'>
            <p>Guests</p>
            <select
              onChange={this.handleInputChange('guests')}
            >
              {
                this.state.guestArr.map((guests, i) => (
                  <option
                    key={`guest_${i}`}
                    value={guests}
                  >
                    {guests}
                  </option>
                ))
              }
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
