import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const BlogPage = () => {
  const { usuarioActual } = useContext(UserContext);

  const { objetivos, logros } = usuarioActual;
  console.log(objetivos);
  const NumerarLogros = () => {
    for (let i = 0; i <= objetivos.length; i++) {
      <li>{usuarioActual.objetivos[i]}</li>;
      return;
    }
  };
  console.log(NumerarLogros);
  return (
    <>
      <h1>Blog Objetivos logrados</h1>
      <ol>
        {/* <NumerarLogros /> */}
        <li>{usuarioActual.logros} :</li>
      </ol>
      <h1>Metas</h1>
      <ol>
        <li>{usuarioActual.objetivos}</li>
      </ol>
    </>
  );
};
