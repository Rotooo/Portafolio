import React, { useEffect, useState } from "react";

const slides = [
  {
    image: "https://picsum.photos/id/1015/800/400",
    subtitle: "Paisaje increíble",
  },
  {
    image: "https://picsum.photos/id/1016/800/400",
    subtitle: "Montañas hermosas",
  },
  {
    image: "https://picsum.photos/id/1018/800/400",
    subtitle: "Atardecer perfecto",
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  // ⏱️ Cambio automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000); // cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.slider}>
      <img
        src={slides[current].image}
        alt="slider"
        style={styles.image}
      />

      <div style={styles.caption}>
        {slides[current].subtitle}
      </div>
    </div>
  );
}

const styles = {
  slider: {
    position: "relative",
    width: "100%",
    margin: "auto",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
  },
  caption: {
    position: "absolute",
    bottom: "10px",
    left: "20px",
    color: "#fff",
    background: "rgba(0,0,0,0.5)",
    padding: "8px 12px",
    borderRadius: "8px",
  },
};