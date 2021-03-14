import React, { useEffect, useReducer } from "react";

import { todoReducer } from "./todoReducer";
import { Todo } from "./types";

import "../../App.css";
import "./styles.css";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";

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

  const handleTodoAdd = (todo: Todo) => {
    const action: Action = {
      type: "add",
      payload: todo,
    };
    dispatch(action);
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
          <TodoForm handleTodoAdd={handleTodoAdd} />
        </div>
      </div>
    </div>
  );
};
