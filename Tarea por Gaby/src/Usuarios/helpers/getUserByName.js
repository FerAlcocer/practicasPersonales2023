import { usuario } from "../data/usuarios";

export const getUserByName = (nombre = "Guest") => {
  nombre = nombre.toLocaleLowerCase().trim();
  return usuario.filter((usuario) =>
    usuario.nombre.toLocaleLowerCase().includes(nombre)
  )[0];
};
