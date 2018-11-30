import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Chart } from 'react-charts'

class Lines extends Component {
  render () {
    const values = getStockData(this.props.stock)
    return (
      <div>
        <div
          style={{
            width: '400px',
            height: '300px'
          }}
        >
          <Chart
            data={[
              {
                label: 'MSFT',
                data: values
              }
            ]}
            axes={[
              { primary: true, type: 'linear', position: 'bottom' },
              { type: 'linear', position: 'left' }
            ]}
            series={{
              showPoints: false
            }}
            primaryCursor
            secondaryCursor
            tooltip
          />
        </div>
        <div>
          <h2 style={{textAlign: 'center'}}>{this.props.business} stock in the las 100 days</h2>
        </div>
      </div>
    )
  }
}

function getStockData (data) {
  console.log('EIIII')
  return Object.keys(data['Time Series (Daily)']).map((key, index) => {
    return [index, data['Time Series (Daily)'][key]['4. close']]
  })
}
const mapStateToProps = (state) => {
  return {
    stock: state.stock,
    business: state.business
  }
}

export default connect(
  mapStateToProps
)(Lines)
