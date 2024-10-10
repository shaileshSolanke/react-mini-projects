import styles from "./Bulb.module.css";

export const Bulb = ({
  index,
  state,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div
      className={styles["bulb-container"]}
      onClick={() => handleClick(index)}
      onMouseMove={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div className={styles["bulb-string"]}></div>
      <div className={`${styles["bulb"]} ${styles[state]}`}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
