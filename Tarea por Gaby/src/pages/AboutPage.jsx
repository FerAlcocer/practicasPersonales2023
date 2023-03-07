import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const AboutPage = () => {
  const { usuarioActual } = useContext(UserContext);
  return (
    <>
      <h1>About {usuarioActual.nombre} </h1>
      <p>{usuarioActual.descripcion}</p>
    </>
  );
};
