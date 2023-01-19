// 2. Crea un componente de reloj que muestre la hora actual. Utiliza useState para mantener el estado de la hora actual y useEffect para actualizar la hora cada segundo.

import { useState, useEffect } from "react";

export const Reloj = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Reloj</h1>
      <p>Hora actual: {time.toLocaleTimeString()}</p>
    </div>
  );
};
