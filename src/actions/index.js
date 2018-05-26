import fetchJsonp from 'fetch-jsonp'

export const FETCH_LISTINGS = 'FETCH_LISTINGS'

const ROOT_URL = 'https://assets.airbnb.com/frontend/search_results.js'

export const fetchListings = () => {
  const request = fetchJsonp(`${ROOT_URL}`, {
    jsonpCallbackFunction: 'search_results'
  })
    .then(response => response.json())
    .then(json => json)
    .catch(ex => {
      console.log('parsing failed', ex)
    })
  return {
    type: FETCH_LISTINGS,
    payload: request
  }
}
