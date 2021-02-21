import React from "react";
import { Fragment } from "react";

import "./counter.css";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHookApp = () => {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <Fragment>
      <h1>Counter With Hooks: {state}</h1>
      <hr />
      <button onClick={() => increment(3)} className="btn">
        +1
      </button>
      <button onClick={reset} className="btn btn-danger">
        Reset
      </button>
      <button onClick={() => decrement(2)} className="btn">
        -1
      </button>
    </Fragment>
  );
};
