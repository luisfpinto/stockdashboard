import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import './style/App.css'

class Home extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to your personal Dashboard
          </p>
          <Link to={'/questionarie'}>Let's Start</Link>
        </header>
      </div>
    )
  }
}

export default Home
