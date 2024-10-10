import { MenuList } from "./MenuList";
import { menuData, factsData } from "../../../data/data";

import styles from "./Application.module.css";
import { useEffect, useState } from "react";

export const Application = () => {
  const [menu, setMenu] = useState([]);
  const [facts, setFacts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchData(url1, url2) {
    try {
      setLoading(true);
      const response1 = await fetch(url1);
      const response2 = await fetch(url2);
      const data1 = await response1.json();
      const data2 = await response2.json();
      if (data1 && data2) {
        setMenu(data1);
        setFacts(data2);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(menuData, factsData);
  }, [menuData, factsData]);

  if (errorMsg !== null) {
    return (
      <div className={styles["error-msg-container"]}>
        <p>SOMETHING WENT WRONG &#40; {errorMsg} &#41;</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles["loading-msg-container"]}>
        <img src="/assets/svg/loading.svg" />
      </div>
    );
  }

  return (
    <div className={styles.application}>
      <div className={styles["app-content"]}>
        {facts.map((fact, index) => (
          <div key={index}>
            <h3>{fact.fact}</h3>
            <p>{fact.description}</p>
          </div>
        ))}
      </div>
      <div className={styles["app-menu"]}>
        <div className={styles["app-menu-top"]}>
          <span>USER</span>
          <img src="/assets/svg/close.svg" />
        </div>
        <MenuList list={menu} />
      </div>
    </div>
  );
};
