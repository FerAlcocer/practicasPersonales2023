import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { getUserByName } from "../Usuarios/helpers/getUserByName";

export const SetUser = ({}) => {
  const { setUsuarioActual } = useContext(UserContext);
  const onSetUser = (nombre) => {
    const u = getUserByName(nombre);
    setUsuarioActual(u);

    return;
  };
  // console.log(usuarioActual);
  return (
    <>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Usuarios
        </Link>
        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-item"
              to="#"
              onClick={() => onSetUser("Fernando")}
            >
              Fernando
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              to="#"
              onClick={() => onSetUser("Gabriel")}
            >
              Gaby
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              to="#"
              onClick={() => onSetUser("Guest")}
            >
              Guest
            </button>
          </li>
        </ul>
      </li>
    </>
  );
};
