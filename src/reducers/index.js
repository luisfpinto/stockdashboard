import { CHANGE_NAME } from '../actions/actions'

const initialState = {
  name: 'Pepe',
  location: 'Spain',
  currency: 'EUR'
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {...state, name: action.name}
    default:
      return state
  }
}
