import { combineReducers } from 'redux'
import { ADD_TODO } from '../actions'
import { ADD_LIKE, ADD_VIEW, CLEAR_LIKES } from '../actions/imageListActions'
import _ from 'lodash'

const initialState = {
    imageList: [{
        id: 1,
        totalLikes: 0,
        totalViews: 0,
        uri: 'https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg'
    }, {
        id: 2,
        totalLikes: 0,
        totalViews: 0,
        uri: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg'
    }, {
        id: 3,
        totalLikes: 0,
        totalViews: 0,
        uri: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg'
    }, {
        id: 4,
        totalLikes: 0,
        totalViews: 0,
        uri: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg'
    }, {
        id: 5,
        totalLikes: 0,
        totalViews: 0,
        uri: 'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg'
    }, {
        id: 6,
        totalLikes: 0,
        totalViews: 0,
        uri: 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg'
    }]
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}

let imageObject;

const imageListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIKE:
            console.log('ADD_LIKE', action.payload.imageId)
            imageObject = state.imageList[_.findIndex(state.imageList, { id: action.payload.imageId })]
            let currentLikes = imageObject.totalLikes;
            state.imageList[imageObject].totalLikes = currentLikes++;
            state.imageList = {
                ...state,
                imageList: state.imageList
            }
            break;
        case ADD_VIEW:
            console.log('ADD_VIEW', action.payload.imageId)
            imageObject = state.imageList[_.findIndex(state.imageList, { id: action.payload.imageId })]
            let currentViews = imageObject.totalViews;
            state.imageList[imageObject].totalViews = currentViews++;
            state.imageList = {
                ...state,
                imageList: state.imageList
            }
            break;
        case CLEAR_LIKES:
            console.log('CLEAR_LIKES', action.payload.imageId)
            imageObject = state.imageList[_.findIndex(state.imageList, { id: action.payload.imageId })]
            state.imageList[imageObject].totalLikes = 0;
            let imageList = state.imageList;
            state.imageList = {
                ...state,
                imageList: imageList
            }
            break;
    }
    return state;
}

const todoApp = combineReducers({
    todos,
    imageListReducer
})

export default todoApp