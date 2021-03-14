import React from "react";

interface IProps {
  value: number;
}

export const Small = React.memo(({ value }: IProps) => {
  console.log("Aqui llegue...");

  return <small>{value}</small>;
});
