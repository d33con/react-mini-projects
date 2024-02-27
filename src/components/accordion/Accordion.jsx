import "./styles.css";

function Accordion({ accordion, handleSetAccordions }) {
  return (
    <div className="accordion">
      <div className="title" onClick={() => handleSetAccordions(accordion.id)}>
        {accordion.title}
      </div>
      <div className={`content ${accordion.open === true && "show"}`}>
        {accordion.content}
      </div>
    </div>
  );
}

export default Accordion;
