export const VOLUMES_FETCH_SUCCEEDED = 'VOLUMES_FETCH_SUCCEEDED'
export const VOLUMES_FETCH_FAILED = 'VOLUMES_FETCH_FAILED'
export const VOLUMES_SEARCH_TYPED =  'VOLUMES_SEARCH_TYPED'

export function searchVolume(text) {
  return {
    type    : VOLUMES_SEARCH_TYPED,
    payload : text
  }
}