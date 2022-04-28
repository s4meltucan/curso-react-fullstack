import React, { useRef } from 'react'

function FormNoControl() {

    const formulario = useRef(null) 

    const handleSubmit = e => {
        e.preventDefault()
        
        const datos = new FormData(formulario.current)
        // console.log(...datos.entries())

        const objetoDatos = Object.fromEntries([...datos.entries()])
        console.log(objetoDatos);

        //destructuracion, extraemos los datos en constantes individuales para hacer validaciones o cualquier operacion

        const {todoDescription, todoName} = objetoDatos
        //con la negacion nos evitamos poner en la condicional del if todoDescription.trim() === ""
        if(!todoDescription.trim()|| !todoName.trim()){
            console.log("descriopcion vacia")
            return
        }

        console.log();
        
    }

  return (
    <>
        <h1> no controlado</h1>
        <form ref={formulario} onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='ingrese ToDo'
                name='todoName'
                className='form-control mb-2'
                defaultValue='tarea 1'
            />

            <textarea
                name='todoDescription'
                className='form-control mb-2'
                placeholder='ingrese descripcion del todo'
                defaultValue='Descripcion de tarea 1'
            />

            <select 
                name="todoEstado"
                className='form-control mb-2'
            >
                <option value="pendiente">Pediente</option>
                <option value="completada">Completada</option>
            </select>

            <button type='submit' className='btn btn-primary mb-2'>Agregar</button>

        </form>
    </>
  )
}

export default FormNoControl