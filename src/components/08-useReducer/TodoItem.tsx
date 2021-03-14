import React from "react";
import { Todo } from "./types";

interface IProps {
  index: number;
  todo: Todo;
  handleDelete: Function;
  handleDone: Function;
}

export const TodoItem = ({ index, todo, handleDelete, handleDone }: IProps) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p className={`${todo.done && "complete"}`}>
        {index + 1}. {todo.desc}
      </p>
      <button onClick={() => handleDelete(todo)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};
