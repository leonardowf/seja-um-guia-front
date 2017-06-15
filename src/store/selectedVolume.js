export const ON_LOAD_VOLUME = "ON_LOAD_VOLUME"

import { ON_SELECT_VOLUME_FROM_LIST } from '../routes/VolumeList/modules/volumeList'

const setVolume = (state, action) => {
  return {
    ...state,
    ...action.payload
  }
}

const ACTION_HANDLERS = {
  [ON_SELECT_VOLUME_FROM_LIST] : setVolume,
  [ON_LOAD_VOLUME]: setVolume
}

const initialState = null

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export const getSelectedVolume = (state) => state.selectedVolume

export const onLoadVolume = (volume) => ({
  type: ON_LOAD_VOLUME,
  payload: volume
})