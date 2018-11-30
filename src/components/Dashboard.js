import React, { Component } from 'react'
import { connect } from 'react-redux'
import lottie from 'lottie-web'
import {fetchAPIs} from '../actions'
import Lines from './LinesChart'
import Weather from './Weather'
import './style/Dashboard.css'

let loader

class Dashboard extends Component {
  componentDidMount () {
    loader = lottie.loadAnimation({
      container: document.getElementById('loader'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://www.lottiefiles.com/storage/datafiles/WKqC5QWz9GiZnlm/data.json' // the path to the animation json
    })
    this.props.fetchAPIs()
  }
  componentDidUpdate () {
  }
  render () {
    if (!this.props.isLoading) {
      loader.destroy()
      return (
        <div className='Dashboard'>
          <h1 id='dashboard-title'>
            Hello {this.props.name} welcome to your personal dashboard
          </h1>
          <Weather id='info' data={this.props.weather} />
          <div id='charts'>
            <Lines />
          </div>
        </div>
      )
    }
    return (<div style={{witdh: '500px', height: '500px'}} id='loader' />)
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    name: state.name,
    weather: state.weather
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
