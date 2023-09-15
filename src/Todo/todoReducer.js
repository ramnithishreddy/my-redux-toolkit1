import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todoActionTypes";

const initialState = {
  todos: [],
};

let Id = 1;

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Id++, text: action.payload }],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.updatedtext }
            : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
