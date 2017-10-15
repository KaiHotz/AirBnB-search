import fetchJsonp from 'fetch-jsonp'

export const FETCH_LISTINGS = 'fetch_LISTINGS'

const ROOT_URL = 'http://assets.airbnb.com/frontend/search_results.js'

export function fetchListings () {
  const request = fetchJsonp(`${ROOT_URL}`, {
    jsonpCallbackFunction: 'search_results'
  })
  .then(response => response.json())
  .then(json => json)
  .catch((ex) => {
    console.log('parsing failed', ex)
  })
  return {
    type: FETCH_LISTINGS,
    payload: request
  }
}
