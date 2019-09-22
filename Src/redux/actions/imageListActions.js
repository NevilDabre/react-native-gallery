/**
 * action types
 */
export const ADD_LIKE = 'ADD_LIKE'
export const ADD_VIEW = 'ADD_VIEW'
export const CLEAR_LIKES = 'CLEAR_LIKE'

/**
 * action creators
 */

export function addLike(imageId) {
    return { type: ADD_LIKE, payload: imageId }
}

export function addView(imageId) {
    return { type: ADD_VIEW, payload: imageId }
}

export function clearLike(imageId) {
    return { type: CLEAR_LIKE, payload: imageId }
}
