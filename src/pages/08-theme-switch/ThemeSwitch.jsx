import { useLocalStorage } from "./hooks/useLocalStorage";
import { keysData } from "../../data/data";
import styles from "./ThemeSwitch.module.css";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleTheme(getTheme) {
    setTheme(getTheme);
  }
  return (
    <div className={styles["theme-switch-container"]} data-theme={theme}>
      <div
        className={styles["theme-changer"]}
        onChange={(e) => handleTheme(e.target.value)}
      >
        <select name="theme-changer">
          <option value="dark">DARK</option>
          <option value="light">LIGHT</option>
          <option value="random1">RANDOM 1</option>
          <option value="random2">RANDOM 2</option>
          <option value="random3">RANDOM 3</option>
        </select>
      </div>
      <div className={styles["key-board"]}>
        <div className={styles["row-1"]}>
          {keysData.rowFirst.map((key, index) => (
            <button key={index} className={styles["key"]}>
              {key}
            </button>
          ))}
        </div>
        <div className={styles["row-2"]}>
          {keysData.rowSecond.map((key, index) => (
            <button key={index} className={styles["key"]}>
              {key}
            </button>
          ))}
        </div>
        <div className={styles["row-3"]}>
          {keysData.rowThird.map((key, index) => (
            <button key={index} className={styles["key"]}>
              {key}
            </button>
          ))}
        </div>
        <div className={styles["row-4"]}>
          {keysData.rowFourth.map((key, index) => (
            <button key={index} className={styles["key"]}>
              {key}
            </button>
          ))}
        </div>
        <div className={styles["row-5"]}>
          {keysData.rowFifth.map((key, index) => (
            <button key={index} className={styles["key"]}>
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
