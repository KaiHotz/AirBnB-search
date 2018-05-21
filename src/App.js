import React, { Fragment } from 'react'
import { compose } from 'recompose'
import WithErrors from './hocs/WithErrors'
import Search from './components/Search'
import Listings from './containers/Listings'
import './styles/styles.scss'

const App = () => (
  <Fragment>
    <Search />
    <Listings />
  </Fragment>
)

export default compose(
  WithErrors
)(App)
