import { useRef } from "react";
import styles from "./Home.module.css";
import { myMessage, myLinks, credits } from "../../data/data";
import { Cursor } from "./components/Cursor";
import { Links } from "./components/Links";
import { Credits } from "./components/Credits";

export const Home = () => {
  const curserRef = useRef();
  return (
    <div className={styles["home-container"]} ref={curserRef}>
      <Cursor curserRef={curserRef} />
      <Links data={myLinks} />
      <div className={styles.message}>
        <h1>
          &quot; Welcome to my{" "}
          <ruby>
            React_Projects
            <rt>mini</rt>
            <rp>mini</rp>
          </ruby>{" "}
          Showcase &quot;
        </h1>
        <p>{myMessage}</p>
      </div>
      <Credits data={credits} />
    </div>
  );
};
