import styles from "./Credits.module.css";

export const Credits = ({ data }) => {
  return (
    <div className={styles.credits}>
      <span>Credits/Inspired By</span>
      <marquee>
        {data.map((link,i) => (
          <em key={i}>{link}</em>
        ))}
      </marquee>
    </div>
  );
};
