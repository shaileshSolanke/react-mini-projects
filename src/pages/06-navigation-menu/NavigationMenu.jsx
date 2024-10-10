import { Phone } from "./components/Phone.jsx";

import styles from "./NavigationMenu.module.css";

export const NavigationMenu = () => {
  return (
    <div className={styles["navigation-menu-container"]}>
      <Phone />
    </div>
  );
};
