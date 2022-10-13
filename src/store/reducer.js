import { SET_TODO_INPUT } from "./constants";

export const initState = {
  todos: [],
  todoInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    //...
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    default:
      throw new Error("Invalid Action !");
  }
}
export default reducer;
