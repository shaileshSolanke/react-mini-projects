import QrCode from "react-qr-code";

import styles from "./QrOutput.module.css";

export const QrOutput = ({ qrCode, color }) => {
  return (
    <div className={styles["qr-code-output"]}>
      <div className={styles.output} style={{background:color}}>
        <QrCode value={qrCode} bgColor={color} size={400} />
      </div>
    </div>
  );
};
