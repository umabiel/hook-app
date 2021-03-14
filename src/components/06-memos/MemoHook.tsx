import React, { useMemo, useState } from "react";

import "../../App.css";
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <p>
        Counter : <small>{counter}</small>
      </p>
      <hr />

      <p>{memoProcesoPesado}</p>

      <button className="btn btn-primary" onClick={() => increment(1)}>
        + 1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide? {JSON.stringify(show)}
      </button>
    </div>
  );
};
