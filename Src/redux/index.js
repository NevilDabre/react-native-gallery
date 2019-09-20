import { createStore } from 'redux'
import todoApp from './reducers'
import { addTodo } from './actions'

const store = createStore(todoApp)

console.log(store.getState());

const unsubscribe = store.subscribe(()=> console.log(store.getState()))

store.dispatch(addTodo('A'));
store.dispatch(addTodo('B'));
store.dispatch(addTodo('C'));

unsubscribe()