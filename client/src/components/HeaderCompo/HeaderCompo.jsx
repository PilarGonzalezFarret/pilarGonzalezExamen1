import styles from "./HeaderCompo.module.css";
import { Link } from 'react-router-dom';

export const HeaderCompo = (props) => {
  return (
    <div>
      <div className={styles.container}>
        <h1>Pirate Crew</h1>

        <a className={styles.linkStyle} onClick={props.onclick} >
          {props.linkName}
        </a>
      </div>
      <div className={styles.container2}>
        <h2>{props.subTitle}</h2>
        <div>{props.boton}</div>
      </div>
    </div>
  );
};