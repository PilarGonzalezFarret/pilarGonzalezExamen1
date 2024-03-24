import styles from "./HeaderCompo.module.css";


export const HeaderCompo = (props) => {
  return (
    <div>
      <div className={styles.container}>
        <h1>Pirate Crew</h1>

        <button className={styles.linkStyle} onClick={props.onclick} >
          {props.linkName}
        </button>
      </div>
      <div className={styles.container2}>
        <h2>{props.subTitle}</h2>
        <div>{props.boton}</div>
      </div>
    </div>
  );
};