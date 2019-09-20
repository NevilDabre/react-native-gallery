/**
 * action types
 */
export const ADD_TODO = 'ADD_TODO'


/**
 * other constants
 */

 export const VisibilityFilters ={
     SHOW_ALL: 'SHOW_ALL'
 }


/**
 * action creators
 */

 export function addTodo(text){
     return { type : ADD_TODO, text}
 }
