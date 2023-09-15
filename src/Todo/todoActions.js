import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../Todo/todoActionTypes";
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const updateTodo = (id, updatedtext) => {
  return {
    type: UPDATE_TODO,
    payload: { id, updatedtext },
  };
};
