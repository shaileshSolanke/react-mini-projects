import { useState } from "react";
import { QrInput } from "./components/QrInput";
import { QrOutput } from "./components/QrOutput";
import { colorData } from "../../data/data";

import styles from "./QrCodeGenerator.module.css";

export const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, SetInput] = useState("");

  const [color, setColor] = useState("#fff");

  function handleGenerateQrCode() {
    setQrCode(input);
    SetInput("");
  }

  return (
    <div className={styles["qr-code-outer-container"]}>
      <QrInput
        input={input}
        SetInput={SetInput}
        handleGenerateQrCode={handleGenerateQrCode}
        color={color}
        setColor={setColor}
        data={colorData}
      />
      <QrOutput qrCode={qrCode} color={color} />
    </div>
  );
};
