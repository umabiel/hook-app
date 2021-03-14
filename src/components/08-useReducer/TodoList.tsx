import React from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "./types";

import "./styles.css";

interface IProps {
  todos: Todo[];
  handleDelete: Function;
  handleDone: Function;
}

export const TodoList = ({ todos, handleDelete, handleDone }: IProps) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo: Todo, idx: number) => {
        return (
          <TodoItem
            key={idx}
            index={idx}
            todo={todo}
            handleDelete={handleDelete}
            handleDone={handleDone}
          />
        );
      })}
    </ul>
  );
};
