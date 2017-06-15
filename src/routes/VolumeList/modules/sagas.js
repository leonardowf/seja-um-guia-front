import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import { getVolumes } from '../../../services'
import { VOLUMES_FETCH_FAILED, VOLUMES_FETCH_SUCCEEDED, VOLUMES_SEARCH_TYPED, ON_SELECT_VOLUME_FROM_LIST } from '../modules/volumeList'
import { push } from 'react-router-redux'

function* fetchVolumes(action) {
  try {
    const searchText = action.payload;
    if (searchText) {
      const response = yield call(getVolumes, action.payload)
      yield put({type: VOLUMES_FETCH_SUCCEEDED, payload: response.data})
    }
  } catch (e) {
    yield put({type: VOLUMES_FETCH_FAILED, message: e.message})
  }
}

function* navigateToDetail({payload: volume}) {
  const actionParams = {pathname: 'volumeDetail', query: {id: volume.id}}
  const action = push(actionParams)
  yield put(action)
}

function* mySaga() {
  yield takeLatest(VOLUMES_SEARCH_TYPED, fetchVolumes)
  yield takeEvery(ON_SELECT_VOLUME_FROM_LIST, navigateToDetail)
}

export default mySaga