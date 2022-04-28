import React from "react";

const Frutas = (props) => {
    
  return (
    <>
      <ul>
        {props.frutasApp.map((fruta, index) => (
          <li key={index}>
              {index + 1} - {fruta}</li>
        ))}
      </ul>
      <p>Lorem ipsum dolor sit.</p>
    </>
  );
};
export default Frutas;
