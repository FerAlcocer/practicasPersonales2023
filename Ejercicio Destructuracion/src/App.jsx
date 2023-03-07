import { Saludo } from "./Saludo";

export const App = () => {
  return (
    <>
      <div className="container mt-2">
        <h1>Componentes</h1>
        <Saludo persona="Juanito" />
        <Saludo persona="Ignacio" />
      </div>
    </>
  );
};
