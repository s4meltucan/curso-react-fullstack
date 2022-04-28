import { useState } from "react";

const Contador = () => {
  
    const[contador, setContador] = useState(0)

    const aumentar = () =>{
        setContador(contador + 1)
        console.log(contador)
    } 

    return (
    <>
      <h2>Contador</h2>
      <button className="btn btn-danger" onClick={aumentar}>aumentar</button>
      <h3>{contador}</h3>
    </>
  );
};

export default Contador;
