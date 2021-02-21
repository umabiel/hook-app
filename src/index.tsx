import React from "react";
import ReactDOM from "react-dom";
// import { HookApp } from "./HookApp";
// import { CounterApp } from "./components/01-useState/CounterApp";
// import { CounterWithCustomHookApp } from "./components/01-useState/CounterWithCustomHookApp";
import { SimpleForm } from "./components/02-useEffect/SimpleForm";

ReactDOM.render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
  document.getElementById("root")
);
