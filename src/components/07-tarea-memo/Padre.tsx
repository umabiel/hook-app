import React, { useCallback } from "react";
import { useState } from "react";

import "../../App.css";
import { Hijo } from "./Hijo";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  //   const increment = (num: number) => {
  //     setValor(valor + num);
  //   };
  const increment = useCallback(
    (num) => {
      setValor((v) => v + num);
    },
    [setValor]
  );
  return (
    <div>
      <h1>Padre</h1>
      <hr />
      <p>Total : {valor}</p>
      <hr />
      {numeros.map((n: number) => {
        return <Hijo key={n} increment={increment} numero={n} />;
      })}
    </div>
  );
};
