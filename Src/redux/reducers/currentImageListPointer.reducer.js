import _ from 'lodash'
import { CHANGE_POINTER  } from '../actions/currentImageListPointerAction'

const initialState = {
    currentPointer: {
        id: 1,
        totalLikes: 10,
        totalViews: 110,
        uri: 'https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg'
    }
}

export default function imageListReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_POINTER:
            const { id, totalLikes, totalViews, uri } = action.payload.currentPointer
            return Object.assign({}, state, {
                currentPointer: {
                    id: id,
                    totalLikes: totalLikes,
                    totalViews: totalViews,
                    uri: uri
                }
            })
        default:
            return state;
    }
}
