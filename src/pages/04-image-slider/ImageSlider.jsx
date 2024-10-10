import styles from "./ImageSlider.module.css";
import { useEffect, useState } from "react";
import { imageSliderData } from "../../data/data";

export const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getURL) {
    try {
      setLoading(true);
      const response = await fetch(getURL);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages(imageSliderData);
  }, [imageSliderData]);

  if (loading) {
    return (
      <div className={styles["loading-msg-container"]}>
        <img src="/assets/svg/loading.svg" />
      </div>
    );
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  if (errorMsg !== null) {
    return (
      <div className={styles["error-msg-container"]}>
        <p>SOMETHING WENT WRONG &#40; {errorMsg} &#41;</p>
      </div>
    );
  }

  return (
    <div className={styles["image-slider-container"]}>
      <button className={styles["arrow"]} onClick={handlePrevious}>
        <img src="/assets/images/left-arrow.png" />
      </button>
      {images.map((img, index) => (
        <img
          className={`${styles["img"]} ${
            currentSlide === index ? "" : styles["hide-img"]
          }`}
          key={img.id}
          src={img.src}
        />
      ))}
      <button className={styles["arrow"]} onClick={handleNext}>
        <img src="/assets/images/right-arrow.png" />
      </button>
      <div className={styles["indicator-btn-container"]}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles["indicator-btn"]} ${
              currentSlide === index ? "" : styles["inactive-indicator-btn"]
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
