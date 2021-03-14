import { Todo } from "./types";

interface Action {
  type: string;
  payload: Todo;
}

export const todoReducer = (state = [] as Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((todo) => todo.id !== action.payload.id);

    case "done":
      return state.map((todo: Todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );

    // case "done":
    //   return state.map((todo: Todo) => {
    //     if (todo.id === action.payload.id) {
    //       return { ...todo, done: !todo.done };
    //     } else {
    //       return todo;
    //     }
    //   });

    default:
      return state;
  }
};
