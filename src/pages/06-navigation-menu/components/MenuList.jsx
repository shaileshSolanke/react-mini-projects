import { MenuItem } from "./MenuItem";

import styles from "./MenuList.module.css";

export const MenuList = ({ list = [] }) => {
  return (
    <ul className={styles["menu-list-container"]}>
      {list
        ? list.map((listItem, index) => (
            <MenuItem key={index} item={listItem} />
          ))
        : null}
    </ul>
  );
};
