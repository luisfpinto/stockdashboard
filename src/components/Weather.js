import React from 'react'

const Weather = (props) => (
  <div>
    <div style={{
      display: 'flex',
      'margin-bottom': '30px'
    }}>
      <p style={{ 'padding-right': '10px' }}><span style={{fontWeight: 'bold'}}>City :</span> {props.data.name}</p>
      <p style={{ 'padding-right': '10px' }}><span style={{ fontWeight: 'bold' }}>Temperature :</span> {props.data.main.temp} K</p>
      <p><span style={{ fontWeight: 'bold' }}>Weather :</span> {props.data.weather[0].main}</p>
    </div>
  </div>
)

export default Weather
