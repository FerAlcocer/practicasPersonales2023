import { useContext } from "react";
import { UserProvider } from "../context/UserProvider";
import { SetUser } from "../ui";

export const AboutPage = () => {
  // const dataUsuario = useContext(UserProvider);
  // const { nombre, descripcion } = dataUsuario;
  return (
    <>
      <h1>About ....</h1>
      <p>descripcion</p>
    </>
  );
};
