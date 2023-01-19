import React from "react";
import ReactDOM from "react-dom/client";

import "./estilos/css/reset.css";
import "./estilos/css/pruebas.css";

// import { Contador } from "./01-Contador";
// import { Reloj } from "./02-Reloj";
import { Formulario } from "./03-Formulario";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Formulario />
  </React.StrictMode>
);
