/**
 * action types
 */
export const CHANGE_POINTER = 'CHANGE_POINTER'

/**
 * action creators
 */

export function changePointer(imageId) {
    return { type: CHANGE_POINTER, payload: imageId }
}