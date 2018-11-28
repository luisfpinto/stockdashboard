import { UPDATE_USER } from '../actions'

const initialState = {
  name: 'Pepe',
  location: 'Spain',
  currency: 'EUR'
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {...state, ...action.user}
    default:
      return state
  }
}
