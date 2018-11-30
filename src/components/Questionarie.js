import React, {Component} from 'react'
import { connect } from 'react-redux';
import {updateUser} from '../actions'
import Question from './Question'
import './style/Questionarie.css'

class Questionarie extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  onSubmit = () => {
    this.props.updateUser(this.state)
    this.props.history.push('/dashboard')
  }

  onReceiveData = (data) => {
    this.setState(() => {
      return {...this.state, ...data}
    })
  }
  render () {
    return (
      <div className='Questionarie'>
        <Question question='What is your name?' placeholder='Ej: Jon' onData={(name) => this.onReceiveData({name})}/>
        <Question question='What is your country and city?' placeholder='Ej: London,UK' onData={(country) => this.onReceiveData({country})}/>
        <Question question='What is the business you wan to track?' placeholder='Ej: MSFT' onData={(business) => this.onReceiveData({business})}/>
        <button onClick={() => this.onSubmit()}>Discover my dashboard</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => {
      return dispatch(updateUser(user))
    }
  }
}

export default connect(
  state => ({ state }), 
  mapDispatchToProps,
)(Questionarie)
