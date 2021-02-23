import React, { useRef } from "react";
import "../../App.css";
export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null); // Agregar el tipo para control input
  const handleButton = () => {
    // console.log(inputRef);
    inputRef.current?.select();
  };
  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Su nombre"
        className="form-control"
      />
      <button className="btn btn-outline-primary mt-5" onClick={handleButton}>
        Focus
      </button>
    </div>
  );
};
