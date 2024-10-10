import { useEffect, useRef, useState } from "react";
import { articleData } from "../../data/data";

import styles from "./ScrollIndicator.module.css";

export const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const containerRef = useRef(null);

  function handleScrollPercentage() {
    const container = containerRef.current;
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const totalScroll = scrollHeight - clientHeight;
      const scrollValue = (scrollTop / totalScroll) * 100;
      setScrollPercentage(scrollValue);
    }
  }

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScrollPercentage);
      return () => {
        container.removeEventListener("scroll", handleScrollPercentage);
      };
    }
  }, []);

  return (
    <div className={styles["scroll-indicator-container"]}>
      <div className={styles["content"]}>
        <div className={styles["content-body"]} ref={containerRef}>
          <div
            className={styles["scroll-indicator"]}
            style={{ width: `${scrollPercentage}%` }}
          >
            <img src="/assets/images/rocket.png" />
          </div>
          <h2>{articleData.question}</h2>
          <div className={styles["category-published-by"]}>
            <p>
              Category: <span>{articleData.category}</span>
            </p>
            <p>
              Published: <span>{articleData.published}</span>
            </p>
            <p>
              By: <span>{articleData.by}</span>
            </p>
          </div>
          <div className={styles["answer"]}>
            {articleData.answer.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className={styles["image-container"]}>
            <img src={articleData.multimedia2.src} />
            <p>{articleData.multimedia2.description}</p>
          </div>
          <p className={styles["topics"]}>
            Topics: <span>{articleData.topics}</span>
          </p>
        </div>
        <div className={styles["content-image"]}>
          <div className={styles["image-container"]}>
            <img src={articleData.multimedia1.src} />
            <p>{articleData.multimedia1.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
