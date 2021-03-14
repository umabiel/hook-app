import React from "react";
import ReactDOM from "react-dom";
// import { CallbackHook } from "./components/06-memos/CallbackHook";
// import { MemoHook } from "./components/06-memos/MemoHook";
// import { Padre } from "./components/07-tarea-memo/Padre";
// import { Memorize } from "./components/06-memos/Memorize";
// import { Layout } from "./components/05-useLayoutEffect/Layout";
// import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook";
// import { HookApp } from "./HookApp";
// import { CounterApp } from "./components/01-useState/CounterApp";
// import { CounterWithCustomHookApp } from "./components/01-useState/CounterWithCustomHookApp";
// import { SimpleForm } from "./components/02-useEffect/SimpleForm";
// import { MultipleCustomHooks } from "./components/03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./components/04-useRef/FocusScreen";
// import { RealExampleRef } from "./components/04-useRef/RealExampleRef";
import { TodoApp } from "./components/08-useReducer/TodoApp";

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById("root")
);
