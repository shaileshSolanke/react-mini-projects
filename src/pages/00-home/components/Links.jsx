import styles from "./Links.module.css";

export const Links = ({ data }) => {
  return (
    <div className={styles.links}>
      {data.map((link, i) => (
        <a key={i} href={link.href} target="_blank">
          <img src={link.src} title={link.title} />
        </a>
      ))}
    </div>
  );
};
