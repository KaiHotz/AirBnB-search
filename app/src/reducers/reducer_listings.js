import { FETCH_LISTINGS } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_LISTINGS:
      return action.payload
    default:
      return state
  }
}
