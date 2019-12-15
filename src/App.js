import React from 'react'
import { compose } from 'recompose'
import WithErrors from './hocs/WithErrors'
import Search from './components/Search'
import Listings from './containers/Listings'
import './styles/styles.scss'

const App = () => (
  <>
    <Search />
    <Listings />
  </>
)

export default compose(WithErrors)(App)
