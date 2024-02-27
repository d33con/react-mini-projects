import { useEffect, useState } from "react";
import "./styles.css";

function ImageSlider() {
  const [images, setImages] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=10").then((res) =>
      res.json().then((data) => setImages(data))
    );
  }, []);

  function incrementIndex() {
    active === images.length - 1
      ? setActive(0)
      : setActive((prevState) => prevState + 1);
  }

  function decrementIndex() {
    active === 0
      ? setActive(images.length - 1)
      : setActive((prevState) => prevState - 1);
  }

  return (
    <section>
      <h1>Image Carousel</h1>
      <div className="slider-container">
        <button onClick={() => decrementIndex()}>&lt;</button>
        {images.map((img) => (
          <img
            key={img.id}
            src={img.download_url}
            alt=""
            className={`slider-img ${active == img.id ? "shown" : "hidden"}`}
          />
        ))}
        <button onClick={() => incrementIndex()}>&gt;</button>
      </div>
    </section>
  );
}

export default ImageSlider;
