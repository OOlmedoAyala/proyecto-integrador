import React from "react";

export default function SearchBar(props) {
   return (
      <div>
         <input type='search' placeholder="Buscar..."/>
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}