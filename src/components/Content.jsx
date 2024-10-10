import styles from "../styles/Content.module.css";

export const Content = ({ children }) => {
  return <div className={styles["content-container"]}>{children}</div>;
};
