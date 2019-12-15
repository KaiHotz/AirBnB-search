import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import qs from 'qs'
import Form from '../UI/Form'
import Button from '../UI/Button'
import './styles.scss'

class Search extends Component {
  onSubmit = data => {
    const url = 'http://www.airbnb.com/search'
    const queries = qs.stringify(data, { addQueryPrefix: true })
    window.open(`${url}${queries}`, '_blank')
  }

  getSchema = () => yup.object().shape({
    location: yup.string().required('City is Required'),
    checkin: yup
      .date()
      .required('required'),
    checkout: yup
      .date()
      .min(yup.ref('checkin'), 'date not valid')
      .required('required'),
    guests: yup.number(),
  })

  handleOptions = () => {
    const options = []
    for (let i = 1; i <= 16; i += 1) {
      const option = { label: i, value: i }
      options.push(option)
    }

    return options
  }

  render() {
    return (
      <Formik
        initialValues={{
          location: '',
          checkin: '',
          checkout: '',
          guests: 1,
        }}
        validationSchema={this.getSchema()}
        onSubmit={this.onSubmit}
      >
        {
          ({ handleSubmit }) => (
            <Form className="search">
              <div className="location">
                <Form.Input
                  name="location"
                  placeholder="City"
                  required
                />
                <Button
                  onClick={handleSubmit}
                  content="Search"
                  imgSrc="assets/images/search.png"
                />
              </div>
              <div className="bookings">
                <Form.DatePicker
                  className="search-booking--date-picker"
                  name="checkin"
                  label="Check in"
                  required
                />
                <Form.DatePicker
                  className="search-booking--date-picker"
                  name="checkout"
                  label="Check out"
                  required
                />
                <Form.Select
                  label="Guests"
                  name="guests"
                  required
                  options={this.handleOptions()}
                />
              </div>
            </Form>
          )
        }
      </Formik>
    )
  }
}

export default Search
