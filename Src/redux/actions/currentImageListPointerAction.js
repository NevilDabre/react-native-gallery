/**
 * action types
 */
export const CHANGE_POINTER = 'CHANGE_POINTER'
export const INITIALIZE_POINTER = 'INITIALIZE_POINTER'

/**
 * action creators
 */

export function changePointer(imageId) {
    return { type: CHANGE_POINTER, payload: imageId }
}

export function initializePointer(imageInfo) {
    return { type: INITIALIZE_POINTER, payload: imageInfo }
} 