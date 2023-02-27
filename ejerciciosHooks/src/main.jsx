import React from "react";
import ReactDOM from "react-dom/client";

import "./estilos/css/reset.css";
import "./estilos/css/pruebas.css";

import { ListaTareas } from "./useReducer/ListaTareas";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ListaTareas />
  // </React.StrictMode>
);
