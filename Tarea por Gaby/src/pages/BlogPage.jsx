import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const BlogPage = () => {
  const { usuarioActual } = useContext(UserContext);

  const { objetivos, logros } = usuarioActual;
  let listaObjetivos = [];
  let listaLogros = [];

  if (objetivos && objetivos !== undefined) {
    listaObjetivos = objetivos.map((objetivo) => <li>{objetivo}</li>);
  }
  if (logros && logros !== undefined) {
    listaLogros = logros.map((logro) => <li>{logro}</li>);
  }

  return (
    <>
      <h1>Blog Objetivos logrados</h1>
      <ol>{listaObjetivos}</ol>
      <h1>Metas</h1>
      <ol>{listaLogros}</ol>
    </>
  );
};
