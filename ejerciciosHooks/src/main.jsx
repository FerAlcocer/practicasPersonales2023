import React from "react";
import ReactDOM from "react-dom/client";

import "./estilos/css/reset.css";
import "./estilos/css/pruebas.css";
import { ColoresPantalla } from "./08-coloresPantalla";

// import { Contador } from "./01-Contador";
// import { Reloj } from "./02-Reloj";
// import { EncenderApagar } from "./04-encenderApagar";
// import { Likes } from "./05-Likes";
// import { BuscadorLista } from "./07-BuscadorLista";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColoresPantalla />
  </React.StrictMode>
);
