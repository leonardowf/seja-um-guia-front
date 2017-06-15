export const VOLUMES_FETCH_SUCCEEDED = 'VOLUMES_FETCH_SUCCEEDED'
export const VOLUMES_FETCH_FAILED = 'VOLUMES_FETCH_FAILED'
export const VOLUMES_SEARCH_TYPED =  'VOLUMES_SEARCH_TYPED'

export const ON_SELECT_VOLUME_FROM_LIST = 'ON_SELECT_VOLUME_FROM_LIST'

export function searchVolume(text) {
  return {
    type    : VOLUMES_SEARCH_TYPED,
    payload : text
  }
}

export function selectVolumeFromList(volume) {
  return {
    type    : ON_SELECT_VOLUME_FROM_LIST,
    payload : volume
  }
}

const volumesFetchSucceededHandler = (state, action) => {
  return {
    ...state,
    lastSearch: action.payload
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [VOLUMES_FETCH_SUCCEEDED]    : volumesFetchSucceededHandler,

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  lastSearch: {
    items: []
  }
}
export default function volumeListReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export const volumesSelector = state => {
  return state.volumeList.lastSearch.items
}

export const selectedVolumeSelector = state => {
  return state.volumeList.selectedVolume
}


