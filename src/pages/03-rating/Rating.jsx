import { useState } from "react";

import styles from "./Rating.module.css";
import { Bulb } from "./components/Bulb";
import { Quote } from "./components/Quote";

export const Rating = ({ starCount = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    setRating(currentIndex);
  }

  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <>
      <div
        className={styles["rating-container"]}
        style={{
          background: `radial-gradient(#${111 * (rating + 5)}, #111)`,
        }}
      >
        <div className={styles["bulbs"]}>
          {[...Array(starCount)].map((_, index) => {
            index += 1;
            return (
              <Bulb
                key={index}
                index={index}
                state={index <= (hover || rating) ? "on" : "off"}
                handleClick={handleClick}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            );
          })}
        </div>
        <Quote opacity={(rating) / 5} />
      </div>
    </>
  );
};
