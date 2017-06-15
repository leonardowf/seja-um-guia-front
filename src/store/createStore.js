import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './reducers'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import volumeListSaga from '../routes/VolumeList/modules/sagas'
import volumeDetailSaga from '../routes/VolumeDetail/modules/sagas'

import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'


const createStore = (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  let middleware = [thunk]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  let composeEnhancers = compose
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

      const logger = createCustomizedLogger()

      // middleware.push(logger)
    }
  }

  const routerMiddlewareBrowserHistory = routerMiddleware(browserHistory)
  middleware.push(routerMiddlewareBrowserHistory)

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )

  sagaMiddleware.run(volumeListSaga)
  sagaMiddleware.run(volumeDetailSaga)

  store.asyncReducers = {}

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  // store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}

const createCustomizedLogger = () => {
  const logger = createLogger({
    collapsed: true,
    duration: true,
    diff: true
  })

  return logger
}

export default createStore
