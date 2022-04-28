import { useState } from "react";

const Formulario = () => {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescription: "",
    todoEstado: "pendiente",
    todoCheck: false,
  });

  //handleSubmit es el que procesa el formulario

  const[error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    const {todoName, todoDescription} = todo;
 
    if(!todoDescription.trim()|| !todoName.trim()){
      setError(true)
      return
    }

    setError(false)

    console.log(todo);

  };

  const handleChange = (e) => {
    // (e) => setTodo({...todo, todoDescription: e.target.value})
   
    //destructuring
    const {name, value, checked, type} = e.target;
    //con destructuring
    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value

    })

    // sin destructuring 
    // setTodo({
    //   ...todo,
    //   [e.target.name]:
    //     e.target.type === "checkbox" ? e.target.checked : e.target.value,
    // });
  };

  const PintarError = () => (
    <div className="alert alert-danger">Campos Obligatorios</div>
  )

  return (
    <>
      <h1> no controlado</h1>

      {
        error ? <PintarError /> : null
      }

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingrese ToDo"
          name="todoName"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoName}
        />

        <textarea
          name="todoDescription"
          className="form-control mb-2"
          placeholder="ingrese descripcion del todo"
          onChange={handleChange}
          value={todo.todoDescription}
        />

        <select
          name="todoEstado"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoEstado}
        >
          <option value="pendiente">Pediente</option>
          <option value="completada">Completada</option>
        </select>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={todo.todoCheck}
            id="flexCheckDefault"
            name="todoCheck"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Default checkbox
          </label>
        </div>

        <button type="submit" className="btn btn-primary mb-2">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
