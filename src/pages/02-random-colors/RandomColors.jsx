import { useRef, useState } from "react";
import { colorTypeData } from "../../data/data";

import styles from "./RandomColors.module.css";

export const RandomColors = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#BADA55");
  const [copied, setCopied] = useState(false);

  const colorRef = useRef("");

  function randomUtility(len) {
    return Math.floor(Math.random() * len);
  }

  function handleRandomColor(type) {
    if (type === "hex") {
      const hex = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomUtility(hex.length)];
      }
      setColor(hexColor);
    } else if (type === "rgb") {
      const red = randomUtility(256);
      const green = randomUtility(256);
      const blue = randomUtility(256);
      setColor(`rgb(${red},${green},${blue})`);
    } else if (type === "hsl") {
      const hue = randomUtility(360);
      const saturation = randomUtility(100);
      const lightness = randomUtility(100);
      setColor(`hsl(${hue},${saturation}%,${lightness}%)`);
    }
    setCopied(false);
  }

  function copyToClipboard() {
    setCopied(!copied);
    window.navigator.clipboard.writeText(color);
    colorRef.current.select();
  }

  return (
    <>
      <div
        className={styles["random-color-container"]}
        style={{
          background: `color-mix(in srgb,${color} 100%, #ffffff 100%)`,
        }}
      >
        <div className={styles["laptop-container"]}>
          <div
            className={styles["laptop-top"]}
            style={{
              background: color,
            }}
          >
            <input
              className={styles["color-code"]}
              ref={colorRef}
              value={color}
              readOnly
            />
            <marquee className={styles["head-line"]}>
              Black and White are not colours,they're shades.
            </marquee>
          </div>
          <div className={styles["laptop-bottom"]}></div>
        </div>
        <div className={styles["btn-container"]}>
          <select
            className={styles["select-color"]}
            value={typeOfColor}
            onChange={(e) => setTypeOfColor(e.target.value)}
          >
            {colorTypeData.map((color, index) => (
              <option key={index} value={color.value}>
                {color.type}
              </option>
            ))}
          </select>
          <button
            className={styles["genrate-color"]}
            onClick={() => handleRandomColor(typeOfColor)}
          >
            Generate Color
          </button>
          <button
            className={styles["copy-color"]}
            onClick={() => copyToClipboard()}
            title="Copy to Clipboard"
          >
            {copied ? (
              <img src="/assets/svg/done-all.svg" />
            ) : (
              <img src="/assets/svg/copy.svg" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};
