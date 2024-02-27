import { useEffect, useState } from "react";
import "./styles.css";

function LoadMore() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=20`).then((res) =>
      res.json().then((data) => {
        const newData = [...images, ...data];
        setImages(newData);
      })
    );
  }, [page]);

  function loadMore() {
    setPage(page + 1);
  }

  return (
    <section>
      <h1>Load More</h1>
      <div className="images-container">
        {images.map((img) => (
          <img key={img.id} src={img.download_url} alt="" className="img" />
        ))}
      </div>
      <div>Showing {images.length} of 100</div>
      <div>
        <button onClick={() => loadMore()} disabled={images.length > 99}>
          Load More
        </button>
      </div>
    </section>
  );
}

export default LoadMore;
