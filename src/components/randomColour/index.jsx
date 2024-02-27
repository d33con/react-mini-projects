import { useState } from "react";
import "./styles.css";

function RandomColour() {
  const [isCurrentlyRgb, setIsCurrentlyRgb] = useState(true);
  const [backgroundColour, setBackgroundColour] = useState("rgb(0,0,0)");

  function generateRandomRgbColour() {
    const random = () => Math.round(Math.random() * 255);
    const colour = `rgb(${random()}, ${random()}, ${random()})`;
    setBackgroundColour(colour);
    setIsCurrentlyRgb(true);
  }

  function generateRandomHexColour() {
    const random = () =>
      Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0");
    const colour = `#${random()}${random()}${random()}`;
    setBackgroundColour(colour);
    setIsCurrentlyRgb(false);
  }

  function generateRandomColour() {
    return isCurrentlyRgb
      ? generateRandomRgbColour()
      : generateRandomHexColour();
  }

  return (
    <section id="random-colour-generator">
      <h1>Random Colour Generator</h1>
      <div className="buttons-container">
        <button
          className="random-rgb-button"
          onClick={() => generateRandomRgbColour()}
        >
          Generate random RGB colour
        </button>
        <button
          className="random-hex-button"
          onClick={() => generateRandomHexColour()}
        >
          Generate random Hex colour
        </button>
        <button
          className="random-hex-button"
          onClick={() => generateRandomColour()}
        >
          Generate random colour
        </button>
      </div>
      <div className="random-bg" style={{ backgroundColor: backgroundColour }}>
        <div className="current-colour">Current colour: {backgroundColour}</div>
      </div>
    </section>
  );
}

export default RandomColour;
