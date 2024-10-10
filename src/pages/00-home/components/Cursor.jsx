import React, { useEffect, useState } from "react";
import styles from "./Cursor.module.css";

export const Cursor = ({ curserRef }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const home = curserRef.current;
    if (!home) return;

    const moveCursor = (event) => {
      setPosition({ x: event.pageX, y: event.pageY });
    };

    home.addEventListener("mousemove", moveCursor);

    return () => {
      home.removeEventListener("mousemove", moveCursor);
    };
  }, [position]);

  return (
    <img
      className={styles.cursor}
      src="/assets/svg/cursor.svg"
      alt="custom cursor"
      style={{ left: `${position.x - 225}px`, top: `${position.y}px` }}
    />
  );
};
