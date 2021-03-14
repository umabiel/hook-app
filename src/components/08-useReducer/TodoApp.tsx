import React, { FormEvent, useEffect, useReducer } from "react";

import { todoReducer } from "./todoReducer";
import { Todo } from "./types";

import "../../App.css";
import "./styles.css";
import { useForm } from "../../hooks/useForm";
import { TodoList } from "./TodoList";

interface Action {
  type: string;
  payload: Todo;
}

const init = (): Todo[] => {
  let lst: string = localStorage.getItem("todosReactApp")!;
  if (lst === null) {
    lst = "[]";
  }

  return JSON.parse(lst);
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const { values, handleInputChange, clear } = useForm({ description: "" });
  const { description } = values;

  useEffect(() => {
    localStorage.setItem("todosReactApp", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todo: Todo) => {
    const action: Action = {
      type: "delete",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDone = (todo: Todo) => {
    const action: Action = {
      type: "done",
      payload: todo,
    };
    dispatch(action);
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const action: Action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    clear();
  };

  return (
    <div>
      <h1>TodoApp ( {todos.length} )</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleDone={handleDone}
          />
        </div>
        <div className="col-5">
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
        </div>
      </div>
    </div>
  );
};
