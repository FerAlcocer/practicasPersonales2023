import { useEffect, useState } from "react";

export const ColoresPantalla = () => {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(false)}>Dejar de mostrar</button>
      {mostrar ? <MouseColor /> : null}
    </div>
  );
};

function MouseColor() {
  const [color, setColor] = useState("orange");

  useEffect(() => {
    function onMouseMove(evento) {
      if (evento.clientX < window.innerWidth / 2) {
        setColor("orange");
      } else {
        setColor("blue");
      }
    }

    window.addEventListener("mousemove", onMouseMove);
    console.log("EJECUTANDO");

    return () => {
      console.log("LIMPIANDO");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  console.log("Ocurrio un render");

  return <div style={{ height: "100vh", background: color }} />;
}
