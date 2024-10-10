import { QR } from "./QR";
import styles from "./QrInput.module.css";

export const QrInput = ({
  input,
  SetInput,
  handleGenerateQrCode,
  color,
  setColor,
  data,
}) => {
  return (
    <div className={styles["qr-code-input"]}>
      <div className={styles["input"]}>
        <h1 style={{ color: color }}>QRcodes</h1>
        <p style={{ color: color }}>Generate QRCode for anything</p>
        <input
          type="text"
          placeholder="Type Something..."
          value={input}
          onChange={(e) => SetInput(e.target.value)}
          style={{ color: color }}
        />
        <div className={styles["choose-color"]}>
          {data.map((hexColor, index) => (
            <button
              key={index}
              className={styles["btn"]}
              style={{ background: `#${hexColor}` }}
              onClick={() => setColor(`#${hexColor}`)}
            ></button>
          ))}
        </div>
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          <span>GENERATE</span>
          <QR color={color} size={36}/>
        </button>
      </div>
    </div>
  );
};
