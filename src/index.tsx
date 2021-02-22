import React from "react";
import ReactDOM from "react-dom";
// import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook";
// import { HookApp } from "./HookApp";
// import { CounterApp } from "./components/01-useState/CounterApp";
// import { CounterWithCustomHookApp } from "./components/01-useState/CounterWithCustomHookApp";
// import { SimpleForm } from "./components/02-useEffect/SimpleForm";
import { MultipleCustomHooks } from "./components/03-examples/MultipleCustomHooks";

ReactDOM.render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>,
  document.getElementById("root")
);
