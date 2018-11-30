import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './Home'
import Questionarie from './Questionarie'
import Dashboard from './Dashboard'
import store from '../store.js'

const AppRouter = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/questionarie/' component={Questionarie} />
        <Route path='/dashboard/' component={Dashboard} />
      </div>
    </Router>
  </Provider>
)

export default AppRouter
