import Card from './Card.jsx';
import styles from './Cards.module.css'

export default function Cards(props) {
   return <div className={styles.div}>
      {props.characters.map((pj) => (
         <Card 
         key={pj.id}
         name={pj.name}
         status={pj.status}
         species={pj.species}
         gender={pj.gender}
         origin={pj.origin.name}
         image={pj.image}
         onClose={() => window.alert("Emulacion")}  />))}
   </div>;
}
