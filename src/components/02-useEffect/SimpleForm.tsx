import React, { ChangeEvent, useEffect, useState } from "react";
import { Fragment } from "react";
import { Message } from "./Message";

import "./effects.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { email, name } = formState;

  useEffect(() => {
    // console.log("Hey!");
  }, []);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    // console.log(target.value);
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <Fragment>
      <h1>SimpleForm</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu Nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="tucorreo@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === "123" && <Message />}
    </Fragment>
  );
};
