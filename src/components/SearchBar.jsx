import React, { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
const [id,setId] = useState("");

const handleChange = (evento) => {
   setId(evento.target.value)
}

   return (
      <div className={styles.div}>
         <input className={styles.input} type='search' placeholder="Buscar..." onChange={handleChange} value={id}/>
         <button className={styles.btn}onClick={() => {props.onSearch(id);}}>Agregar</button>
      </div>
   );
}
