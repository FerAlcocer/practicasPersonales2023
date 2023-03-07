import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = (props) => {
  const [usuarioActual, setUsuarioActual] = useState({});

  return (
    <UserContext.Provider value={{ usuarioActual, setUsuarioActual }}>
      {props.children}
    </UserContext.Provider>
  );
};
