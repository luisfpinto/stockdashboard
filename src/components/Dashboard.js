import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../assets/logo.svg'
import {fetchAPIs} from '../actions'
import './style/App.css'

class Dashboard extends Component {

  componentDidMount () {
    this.props.fetchAPIs()
  }
  render () {
    if (!this.props.isLoading) {
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
    return (<p>IS LOADING</p>)
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    name: state.name,
    location: state.location,
    currency: state.currency
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAPIs: user => {
      return dispatch(fetchAPIs())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
