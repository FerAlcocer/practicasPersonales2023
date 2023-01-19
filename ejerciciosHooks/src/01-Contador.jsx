// 1. Crea un componente de contador que incremente en 1 cada vez que se presiona un botón. Utiliza useState para mantener el estado del contador y useEffect para actualizar el título de la página con el valor del contador.

import { useState, useEffect } from "react";

export const Contador = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const contadorActual = contador;
    setContador(contadorActual + 1);
  }, []);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>
        Suma +1 al contador
      </button>
    </div>
  );
};
