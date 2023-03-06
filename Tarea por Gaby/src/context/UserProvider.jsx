import { usuario } from "../Usuarios/data/usuarios";
import { UserContext } from "./UserContext";

export const UserProvider = (props) => {
  const dataUsuario = usuario;

  return (
    <UserContext.Provider value={dataUsuario}>
      {props.children}
    </UserContext.Provider>
  );
};
