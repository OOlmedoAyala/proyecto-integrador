import React from "react";
import styles from './Card.module.css';

export default function Card(props) {
   return (
      <div className={styles.div}>
         <button className={styles.btn} onClick={props.onClose}>X</button>
         <h2 className={styles.name}>{props.name}</h2>
         <img className={styles.image} src={props.image} alt={props.name} />
         <div className={styles.data}>
            <h4>{props.species}</h4>
            <h4>{props.gender}</h4>
         </div>
      </div>
   );
}
