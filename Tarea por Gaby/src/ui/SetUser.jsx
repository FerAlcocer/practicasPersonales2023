import { useState } from "react";
import { Link } from "react-router-dom";

export const SetUser = () => {
  const [usuario, setUsuario] = useState("Carlos");

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
              onClick={() => setUsuario("Fernando")}
            >
              Fernando
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              to="#"
              onClick={() => setUsuario("Gaby")}
            >
              Gaby
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              to="#"
              onClick={() => setUsuario("Guest")}
            >
              Guest
            </button>
          </li>
        </ul>
      </li>
    </>
  );
};
