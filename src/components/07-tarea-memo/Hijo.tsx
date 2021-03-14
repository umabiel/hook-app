import React from "react";

interface IProps {
  numero: number;
  increment: Function;
}

export const Hijo = React.memo(({ numero, increment }: IProps) => {
  console.log("Salio Hijo");

  return (
    <div className="inline">
      <button
        onClick={() => increment(numero)}
        className="btn btn-primary btn-inline"
      >
        {numero}
      </button>
    </div>
  );
});
