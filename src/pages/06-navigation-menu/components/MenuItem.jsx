import { useState } from "react";
import styles from "./MenuItem.module.css";
import { MenuList } from "./MenuList";

export const MenuItem = ({ item }) => {
  const [displayChildren, setDisplayChildren] = useState({});

  function handleChildren(currentLabel) {
    setDisplayChildren({
      ...displayChildren,
      [currentLabel]: !displayChildren[currentLabel],
    });
  }

  return (
    <>
      <li className={styles["list-container"]}>
        <div className={styles.list}>
          <p className={styles["list-label"]}>{item.label}</p>
          {item.children ? (
            <button className={styles["list-btn"]} onClick={() => handleChildren(item.label)}>
              {displayChildren[item.label] ? (
                <img src="/assets/svg/remove.svg" />
              ) : (
                <img src="/assets/svg/add.svg" />
              )}
            </button>
          ) : null}
        </div>
        {item.children && displayChildren[item.label] ? (
          <MenuList list={item.children}/>
        ) : null}
      </li>
    </>
  );
};
