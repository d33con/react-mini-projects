import { useState } from "react";
import "./styles.css";

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  function handleMouseEnter(id) {
    setHovered(Number(id));
  }

  function handleMouseLeave() {
    setHovered(rating);
  }

  function handleStarClick(id) {
    setRating(Number(id));
  }

  return (
    <section>
      <h1>Star Rating</h1>
      <div className="rating-container">
        <div
          className={`clip-star ${1 <= (hovered || rating) && "filled"}`}
          id="1"
          onClick={(e) => handleStarClick(e.currentTarget.id)}
          onMouseEnter={(e) => handleMouseEnter(e.currentTarget.id)}
          onMouseLeave={() => handleMouseLeave()}
        ></div>
        <div
          className={`clip-star ${2 <= (hovered || rating) && "filled"}`}
          id="2"
          onClick={(e) => handleStarClick(e.currentTarget.id)}
          onMouseEnter={(e) => handleMouseEnter(e.currentTarget.id)}
          onMouseLeave={() => handleMouseLeave()}
        ></div>
        <div
          className={`clip-star ${3 <= (hovered || rating) && "filled"}`}
          id="3"
          onClick={(e) => handleStarClick(e.currentTarget.id)}
          onMouseEnter={(e) => handleMouseEnter(e.currentTarget.id)}
          onMouseLeave={() => handleMouseLeave()}
        ></div>
        <div
          className={`clip-star ${4 <= (hovered || rating) && "filled"}`}
          id="4"
          onClick={(e) => handleStarClick(e.currentTarget.id)}
          onMouseEnter={(e) => handleMouseEnter(e.currentTarget.id)}
          onMouseLeave={() => handleMouseLeave()}
        ></div>
        <div
          className={`clip-star ${5 <= (hovered || rating) && "filled"}`}
          id="5"
          onClick={(e) => handleStarClick(e.currentTarget.id)}
          onMouseEnter={(e) => handleMouseEnter(e.currentTarget.id)}
          onMouseLeave={() => handleMouseLeave()}
        ></div>
      </div>
    </section>
  );
}

export default StarRating;
