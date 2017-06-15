export const VOLUMES_FETCH_SUCCEEDED = 'VOLUMES_FETCH_SUCCEEDED'
export const VOLUMES_FETCH_FAILED = 'VOLUMES_FETCH_FAILED'
export const VOLUMES_SEARCH_TYPED =  'VOLUMES_SEARCH_TYPED'

export function searchVolume(text) {
  return {
    type    : VOLUMES_SEARCH_TYPED,
    payload : text
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
  // [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2
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


