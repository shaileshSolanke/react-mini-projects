import { useState } from "react";
import styles from "./Phone.module.css";
import { Display } from "./Display";

export const Phone = () => {
  const [showDisplay, setShowDisplay] = useState(false);

  function handleDisplay() {
    setShowDisplay(!showDisplay);
  }

  return (
    <div className={styles["phone"]}>
      <button
        className={`${styles["phone-btn"]} ${styles["phone-btn-1"]}`}
      ></button>
      <button
        className={`${styles["phone-btn"]} ${styles["phone-btn-2"]}`}
      ></button>
      <button
        className={`${styles["phone-btn"]} ${styles["phone-btn-3"]}`}
        onClick={handleDisplay}
      ></button>
      {showDisplay && <Display />}
    </div>
  );
};
