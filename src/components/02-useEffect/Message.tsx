import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Componente Montado");

    return () => {
      console.log("Componente Desmontado");
    };
  }, []);

  return (
    <div>
      <h1>Eres Genial</h1>
    </div>
  );
};
