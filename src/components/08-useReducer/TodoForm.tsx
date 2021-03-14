import React, { FormEvent } from "react";
import { Fragment } from "react";
import { useForm } from "../../hooks/useForm";
import { Todo } from "./types";

interface IProps {
  handleTodoAdd: Function;
}

export const TodoForm = ({ handleTodoAdd }: IProps) => {
  const { values, handleInputChange, clear } = useForm({ description: "" });
  const { description } = values;

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleTodoAdd(newTodo);
    clear();
  };

  return (
    <Fragment>
      <h4>Agregar ToDo</h4>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Hoy quiero aprender..."
          className="form-control"
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-primary mt-1 btn-block"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </Fragment>
  );
};
