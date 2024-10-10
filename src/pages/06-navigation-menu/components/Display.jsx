import { useState } from "react";
import styles from "./Display.module.css";
import { Application } from "./Application";

export const Display = () => {
  const [date, setDate] = useState("");

  setTimeout(() => {
    const date = new Date().toLocaleTimeString();
    setDate(date);
  }, 1000);

  return (
    <div className={styles.display}>
      <div className={styles["status-bar"]}>
        <div className={styles["status-bar-left"]}>
          <span className={styles["date"]}>{date}</span>
          <img src="/assets/svg/mail.svg" />
        </div>
        <div className={styles["status-bar-right"]}>
          <img src="/assets/svg/signal_cellular.svg" />
          <img src="/assets/svg/battery.svg" />
        </div>
      </div>
      <Application />
    </div>
  );
};
