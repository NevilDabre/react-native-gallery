import _ from 'lodash'
import { CHANGE_POINTER  } from '../actions/currentImageListPointerAction'

const initialState = {
    currentPointer: {
        id: 1,
        totalLikes: 0,
        totalViews: 0,
        uri: 'https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg'
    }
}

export default function imageListReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_POINTER:
            console.log('action.payload.imageId', action.payload.currentPointer)
            return Object.assign({}, state, {
                currentPointer: action.payload.currentPointer
            })
        default:
            return state;
    }
}
