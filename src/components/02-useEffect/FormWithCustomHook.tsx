import React, { ChangeEvent, useEffect, useState } from "react";
import { Fragment } from "react";
import { Message } from "./Message";

import "./effects.css";
import { useForm } from "../../hooks/useForm";

interface IForm {
  name: string;
  email: string;
  password: string;
}
const initState: IForm = {
  email: "",
  name: "",
  password: "",
};

export const FormWithCustomHook = () => {
  const { values, handleInputChange } = useForm(initState);
  const { name, email, password } = values;

  useEffect(() => {
    console.log("Email Cambio");
  }, []);

  const handleSubitForm = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <Fragment>
      <form onSubmit={handleSubitForm}>
        <h1>FormWithCustomHook</h1>
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
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="*****"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </Fragment>
  );
};
