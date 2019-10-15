import _ from 'lodash'
import { ADD_LIKE, ADD_VIEW, CLEAR_LIKES } from '../actions/imageListActions'

const initialState = {
    imageList: [{
        id: 1,
        totalLikes: 1,
        totalViews: 1,
        uri: 'https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg'
    }, {
        id: 2,
        totalLikes: 2,
        totalViews: 2,
        uri: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg'
    }, {
        id: 3,
        totalLikes: 3,
        totalViews: 3,
        uri: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg'
    }, {
        id: 4,
        totalLikes: 4,
        totalViews: 4,
        uri: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg'
    }, {
        id: 5,
        totalLikes: 5,
        totalViews: 5,
        uri: 'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg'
    }, {
        id: 6,
        totalLikes: 6,
        totalViews: 6,
        uri: 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg'
    }]
}

export default function imageListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LIKE:
            return {
                ...state,
                imageList: state.imageList.map((i) => {
                    if (i && i.id === action.payload.imageId) {
                        return Object.assign({}, i, {
                            totalLikes: i.totalLikes + 1
                        })
                    } else {
                        return i
                    }
                })
            }
        case ADD_VIEW:
            return {
                ...state,
                imageList: state.imageList.map((i) => {
                    if (i && i.id === action.payload.imageId) {
                        return Object.assign({}, i, {
                            totalViews: i.totalViews + 1
                        })
                    } else {
                        return i
                    }
                })
            }
        case CLEAR_LIKES:
            return {
                ...state,
                imageList: state.imageList.map((i) => {
                    if (i && i.id === action.payload.imageId) {
                        return Object.assign({}, i, {
                            totalLikes: 0
                        })
                    } else {
                        return i
                    }
                })
            }
        default:
            return state;
    }
}
