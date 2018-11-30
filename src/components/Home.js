import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web'
import './style/Home.css'

class Home extends Component {
  componentDidMount () {
    lottie.loadAnimation({
      container: document.getElementById('animation'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://www.lottiefiles.com/storage/datafiles/gbQKQKT9Z0WGdT9/data.json' // the path to the animation json
    })
  }

  render () {
    return (
      <div className="Home">
        <header className="Home-header">
          <div id='animation'/>
          <h2>
            Discover what's happening in the market
          </h2>
          <Link id='link' to={'/questionarie'}><button>Let's Start</button></Link>
        </header>
      </div>
    )
  }
}

export default Home
