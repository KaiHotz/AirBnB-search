import { combineReducers } from 'redux'
import ListingsReducer from './reducer_listings'

const rootReducer = combineReducers({
  listings: ListingsReducer
})

export default rootReducer
