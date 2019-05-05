import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  menu: null,
  classify: null
}

export const actionTypes = {
  SET_MENU: 'SET_MENU',
  RESET_MENU: 'RESET_MENU',
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MENU:
      return Object.assign({}, state, {
        menu: action.menu
      })
    case actionTypes.RESET_MENU:
      return Object.assign({}, state, {
        menu: initialState.menu
      })
    default: return state
  }
}

// ACTIONS

export const setMenu = (menu) => dispatch => {
  return dispatch({ type: actionTypes.SET_MENU, menu })
}

export const resetMenu = () => dispatch => {
  return dispatch({ type: actionTypes.RESET_MENU })
}

export function initializeStore(initialState = initialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

