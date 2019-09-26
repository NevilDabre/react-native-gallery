import { combineReducers } from 'redux'

import imageListReducer from './imageList.reducer'
import currentImageListPointer from './currentImageListPointer.reducer'

const todoApp = combineReducers({
    images: imageListReducer,
    currentImagePointer: currentImageListPointer
})

export default todoApp