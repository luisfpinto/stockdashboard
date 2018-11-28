import React, {Component} from 'react'

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
  return (
    <div>
      <h2>{this.props.question}</h2>
      <input type='text' value={this.state.value} onChange={this.handleChange} onBlur={() => this.props.onData(this.state.value)} />
    </div >
  )
  }

}

export default Question
