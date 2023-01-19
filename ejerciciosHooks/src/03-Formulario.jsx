// 3. Crea un componente de formulario que permita al usuario ingresar su nombre y guardarlo en el estado del componente. Utiliza useState para mantener el estado del nombre y useEffect para guardar el nombre en el almacenamiento local del navegador.
import { useState, useEffect } from "react";

export const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [nombresGuardados, setNombresGuardados] = useState([]);

  useEffect(() => {
    const nombres = localStorage.getItem("nombres");
    if (nombres) {
      setNombresGuardados(JSON.parse(nombres));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNombresGuardados([...nombresGuardados, nombre]);
    localStorage.setItem("nombres", JSON.stringify(nombresGuardados));
    setNombre("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>
      <ul>
        {nombresGuardados.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </>
  );
};
