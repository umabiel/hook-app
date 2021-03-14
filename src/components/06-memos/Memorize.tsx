import { truncate } from "fs";
import React, { useState } from "react";

import "../../App.css";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Memorize</h1>
      <p>
        Counter : <Small value={counter} />{" "}
      </p>
      <hr />

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
