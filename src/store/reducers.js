import { combineReducers } from 'redux'
import locationReducer from './location'
import { routerReducer } from 'react-router-redux'
import selectedVolume from './selectedVolume'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    routing: routerReducer,
    selectedVolume,
    ...asyncReducers

  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
