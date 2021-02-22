import { useState } from "react";

export const useCounter = (initialState: number = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = (factor: number = 1) => {
    setCounter(counter + factor);
  };
  const decrement = (factor: number = 1) => {
    setCounter(counter - factor);
  };

  const reset = () => {
    setCounter(initialState);
  };

  return { counter, increment, decrement, reset };
};
