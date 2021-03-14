import React from "react";

interface IProps {
  increment: Function;
}

export const ShowIncrement = React.memo(({ increment }: IProps) => {
  console.log("Volvi a aparecer! =(");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      Increment
    </button>
  );
});
