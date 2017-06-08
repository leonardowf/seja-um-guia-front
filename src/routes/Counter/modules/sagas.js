import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getVolumes } from './services.js'
import { VOLUMES_FETCH_FAILED, VOLUMES_FETCH_SUCCEEDED, VOLUMES_SEARCH_TYPED } from './volumes'

function* fetchVolumes(action) {
  try {
    const response = yield call(getVolumes, action.payload)
    yield put({type: VOLUMES_FETCH_SUCCEEDED, payload: response.data})
  } catch (e) {
    yield put({type: VOLUMES_FETCH_FAILED, message: e.message})
  }
}

function* mySaga() {
  yield takeLatest(VOLUMES_SEARCH_TYPED, fetchVolumes)
}

export default mySaga