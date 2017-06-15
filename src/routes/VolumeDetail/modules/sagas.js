import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects'
import { LOAD_VOLUME_ID } from './volumeDetail'
import { push } from 'react-router-redux'
import { getSelectedVolume } from '../../../store/selectedVolume'
import { getVolume } from '../../../services'
import { onLoadVolume } from '../../../store/selectedVolume'

function* loadVolumeWithId({payload: id}) {
  const selectedVolume = yield select(getSelectedVolume)

  try {
    if (!selectedVolume) {
      const response = yield call(getVolume, id)
      yield put(onLoadVolume(response.data))
    }
  } catch(error) {
    yield put(push('/'))
  }

  // const action = push(actionParams)
  // yield put(action)
}

function* mySaga() {
  yield takeEvery(LOAD_VOLUME_ID, loadVolumeWithId)
}

export default mySaga