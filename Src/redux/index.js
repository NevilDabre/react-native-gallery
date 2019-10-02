import { createStore } from 'redux'
import imageSearchReducers from './reducers'

const store = createStore(imageSearchReducers)

export default store