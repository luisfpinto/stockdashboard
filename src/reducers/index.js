import { UPDATE_USER, FETCH_SUCCESS, LOADING, FETCH_ERROR } from '../actions'

const initialState = {
  isLoading: true,
  error: false,
  name: 'Jon',
  location: 'LONDON,UK',
  business: 'MSFT',
  weather: null,
  stock: null
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {...state, ...action.user}
    case LOADING: 
      return {...state, isLoading: !state.isLoading}
    case FETCH_SUCCESS:
      return {...state, weather: action.data.weather, stock: action.data.sock}
    case FETCH_ERROR:
      return {...state, error: true}
    default:
      return state
  }
}
