import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../assets/logo.svg'
import './style/App.css'

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hola {this.props.name} DASHBOARD {this.props.location}
          </p>
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    location: state.location,
    currency: state.currency
  }
}

export default connect(
  mapStateToProps
)(Dashboard)
