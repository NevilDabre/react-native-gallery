import { combineReducers } from 'redux'

import imageListReducer from './imageList.reducer'
import currentImageListPointer from './currentImageListPointer.reducer'

const imageSearchReducers = combineReducers({
    images: imageListReducer,
    currentImagePointer: currentImageListPointer
})

export default imageSearchReducers