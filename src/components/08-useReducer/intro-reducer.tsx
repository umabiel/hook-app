export {};
const initialState = [
  {
    id: 1,
    todo: "Comprar Pan",
    done: false,
  },
];

const todoReducer = (state = initialState, action?: string) => {
  return state;
};

const todos = todoReducer();

console.log("State => ", todos);
