import { useReducer, useRef } from "react";

export const ListaTareas = () => {
  const inputRef = useRef();
  //   console.log(inputRef);
  const [tareas, dispatch] = useReducer((state = [], action) => {
    console.log(action.type);
    switch (action.type) {
      case "add_task": {
        return [...state, { id: state.lenght, title: action.title }];
      }
      case "remove_tarea": {
        return state.filter((tarea, inde) => inde != action.inde);
      }
      default: {
        return state;
      }
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "add_task",
      title: inputRef.current.value,
    });
  };

  return (
    <>
      <div>
        <h1>Lista de tareas</h1>
        <form onSubmit={handleSubmit}>
          <label>Tarea</label>
          <input type="text" name="title" ref={inputRef} />
          <input type="submit" value="enviar" />
        </form>

        <div className="tareas">
          {tareas &&
            tareas.map((tarea, index) => (
              <div className="tarea" key={index}>
                <p>{tarea.title}</p>

                <button
                  onClick={() => dispatch({ type: "remove_tarea", index })}
                >
                  Borrar
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
