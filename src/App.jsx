
import React, { useState } from 'react'
import FormNoControl from './components/FormNoControl'
import Formulario from './components/Formulario'

const App = () => {

  const  [sumaUno,setSuma] = useState(0)

  const suma = () => {
    setSuma(sumaUno + 1)
    console.log(sumaUno)
  }

  return (
   <div className='container'>

      <h1>Formularios</h1>
      <Formulario/>
   </div>
  )
}

export default App

 //primero formulario ¨***************************************
    // <div className='container'>
    //   <h1 className='fs-2 fw-bolder'>Formularios</h1>
    //   <FormNoControl/>

    //   <button className='btn btn-info mb-2' onClick={suma}>suma aqui</button>

    //   <h1>{sumaUno}</h1>
    // </div>

// primera clase react
// import Contador from "./components/Contador";
// import Frutas from "./components/Frutas";

// const App = () => {
//   const saludo = "saludo desde variable";
//   const colores = {
//     primary: "text-primary",
//     info: "text-info",
//     danger: "text-danger",
//   };
//   const user = false;

//   const saludoBienvenida = () => <h2 className="text-success">Bievenido</h2>;

//   const saludoDespedida = () => <h2 className="text-danger">Adioooooos!</h2>;

//   const funcionClick = (nombre) =>
//     console.log(`${nombre}, me dio click desde la funcion`);

//   const frutas = ["manzana", "fresa", "platano"];

//   return (
//     <div className="container">
//       <Contador />
//       <p>{saludo}</p>
//       <h1 className={colores.primary}>{saludo}</h1>
//       {/* operadores ternarios; si es true aplica lo primera opcion, si es false la segunda */}
//       {user ? saludoBienvenida : saludoDespedida}

//       <Frutas frutasApp={frutas} />

//       <button className="btn btn-primary" onClick={() => funcionClick("lalo")}>
//         dame click w
//       </button>
//     </div>
//   );
// };

// export default App;
