import styles from "./Quote.module.css";

export const Quote = ({ opacity }) => {
  return (
    <div className={styles["quote-container"]} style={{ opacity: opacity }}>
      <p className={styles["quote"]}>
        Everything we hear is an opinion, not a fact. Everything we see is a
        perspective, not the truth.
      </p>
      <em className={styles["quote-by"]}>- Marcus Aurelius</em>
    </div>
  );
};
