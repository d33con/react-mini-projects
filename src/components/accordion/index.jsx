import { useState } from "react";
import "./styles.css";
import Accordion from "./Accordion";

const accordions = [
  {
    id: 1,
    title: "Accordion 1",
    content: "Accordion 1 content",
    open: false,
  },
  {
    id: 2,
    title: "Accordion 2",
    content: "Accordion 2 content",
    open: false,
  },
  {
    id: 3,
    title: "Accordion 3",
    content: "Accordion 3 content",
    open: false,
  },
  {
    id: 4,
    title: "Accordion 4",
    content: "Accordion 4 content",
    open: false,
  },
];

function Accordions() {
  const [isMulti, setIsMulti] = useState(false);
  const [accordionsState, setAccordionsState] = useState(accordions);

  function handleSetAccordions(id) {
    if (isMulti) {
      setAccordionsState((prevState) =>
        prevState.map((accordion) =>
          accordion.id === id
            ? { ...accordion, open: !accordion.open }
            : accordion
        )
      );
    } else {
      setAccordionsState((prevState) =>
        prevState.map((accordion) =>
          accordion.id === id
            ? { ...accordion, open: !accordion.open }
            : { ...accordion, open: false }
        )
      );
    }
  }

  return (
    <section>
      <h1>Accordions</h1>
      <div>
        <button
          className="multi-accordions"
          onClick={() => setIsMulti(!isMulti)}
        >
          Set Multi Accordions: {`${isMulti ? "On" : "Off"}`}
        </button>
      </div>
      <div>
        {accordionsState.map((accordion) => (
          <Accordion
            key={accordion.id}
            accordion={accordion}
            handleSetAccordions={handleSetAccordions}
          />
        ))}
      </div>
    </section>
  );
}

export default Accordions;
