import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./image-slider.css";

type ImageSliderProps = {
  imageUrls: string[];
};

export default function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setimageIndex] = useState(0);

  function prevoiusImage() {
    setimageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }
  function nextImage() {
    setimageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            alt="picture"
            className="img-slider"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={prevoiusImage}
        className="image-slider-btn"
        style={{ left: "0" }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={nextImage}
        className="image-slider-btn"
        style={{ right: "0" }}
        aria-label="View Next Image"
      >
        <ArrowBigRight />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display:"flex",
          gap:".25rem"
        }}
      >
        {imageUrls.map((_, index) => (
          <button aria-label={`View Image ${index}`} key={index} className="img-slider-dot-btn" onClick={() => setimageIndex(index)}>{index === imageIndex ? <CircleDot/> : <Circle/>}</button>
        ))}
      </div>
    </div>
  );
}
