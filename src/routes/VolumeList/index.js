import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'volumeList',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const VolumeList = require('./containers/VolumeListContainer').default
      const reducer = require('./modules/volumeList').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'volumeList', reducer })
      injectReducer(store, { key: 'double', reducer })

      /*  Return getComponent   */
      cb(null, VolumeList)

    /* Webpack named bundle   */
    }, 'volumeList')
  }
})
