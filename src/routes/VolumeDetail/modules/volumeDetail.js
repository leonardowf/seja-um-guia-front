export const LOAD_VOLUME_ID = 'LOAD_VOLUME_ID'

export const loadVolumeWithId = (volumeId) => ({
  type: LOAD_VOLUME_ID,
  payload: volumeId
})

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

// ------------------------------------
// Selectors
// ------------------------------------

