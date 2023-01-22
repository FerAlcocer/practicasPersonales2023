import React from "react";
import { useState } from "react";

export const EncenderApagar = () => {
  const [stateCar, setStateCar] = useState(false);

  const arranque = () => {
    setStateCar(!stateCar);
  };

  return (
    <div>
      <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
      <button onClick={arranque}>Encender / Apagar</button>
    </div>
  );
};
