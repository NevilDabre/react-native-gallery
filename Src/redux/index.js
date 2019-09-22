import { createStore } from 'redux'
import todoApp from './reducers'
import { addTodo } from './actions'

import { addLike, addView, clearLike } from './actions/imageListActions'
const store = createStore(todoApp, {})

console.log(store.getState());

const unsubscribe = store.subscribe(()=> console.log(store.getState()))

store.dispatch(addLike({imageid: 1}));
store.dispatch(addLike({imageid: 1}));
store.dispatch(addLike({imageid: 1}));
store.dispatch(addLike({imageid: 1}));
unsubscribe()
store.dispatch(clearLike(1));

unsubscribe()