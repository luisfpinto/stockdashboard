import React, {Component} from 'react'
import { connect } from 'react-redux';
import {updateUser} from '../actions'
import Question from './Question'

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
      <div>
        <Question question='What is your name?' onData={(name) => this.onReceiveData({name})}/>
        <Question question='What is your country?' onData={(country) => this.onReceiveData({country})}/>
        <Question question='What is the business you wan to track?' onData={(currency) => this.onReceiveData({currency})}/>
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
