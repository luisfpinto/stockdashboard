export const UPDATE_USER = 'UPDATE_USER'
export const FETCH_APIS = 'FETCH_APIS'
export const FETCH_ERROR = 'FETCH_ERROR'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const LOADING = 'LOADING'

export function updateUser (user) {
  return {type: UPDATE_USER, user}
}

export function fetchError (error) {
  return {type: FETCH_ERROR, error}
}

export function loading () {
  return {type: LOADING}
}

export function fetchSuccess (data) {
  return {type: FETCH_SUCCESS, data}
}

export const fetchAPIs = userInfo => dispatch => {
  console.log('FETCHING APIS')
  // We would use user info in the API calls. We use default instead
  // It will be better to spread different API calls into different functions,
  // however, we will use them all here to simplify
  let response = {}
  fetch('http://api.openweathermap.org/data/2.5/weather?q=London,UK&APPID=ad3a2b6726680ee9fbee80cb783e4118')
  .then(res => {
    if (!res.ok) return Promise.reject('Error Fething the Weather API')
    return res.json()
  })
  .then(weather => {
    response.weather = weather
    return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=O6N9XFKTM0BKDUW0')
  })
  .then(res => {
    if (!res.ok) return Promise.reject('Error Fething the Stock API')
    return res.json()
  })
  .then(stock => {
    response.stock = stock
    console.log(response)
    dispatch(fetchSuccess(response))
    dispatch(loading())
  })
  .catch(error => dispatch(fetchError(error)))
}
