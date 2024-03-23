import styles from "./ButtonCompo.module.css";

export const ButtonCompo = (props) => {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={props.onclick}
      style={{ backgroundColor: props.color }}
    >
      {props.name}
    </button>
  );
};