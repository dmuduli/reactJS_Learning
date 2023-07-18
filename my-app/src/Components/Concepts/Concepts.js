import React from "react";
import ConceptsItem from "./ConceptsItem/ConceptsItem";
import "./Concepts.css";

const Concepts = (props) => {
  return (
    <div className="concept-container">
      <ConceptsItem
        reactConceptsImage={props.items[1].image}
        reactConceptsTitle={props.items[1].title}
        reactConceptsDescription={props.items[1].description}
      />
      <ConceptsItem
        reactConceptsImage={props.items[2].image}
        reactConceptsTitle={props.items[2].title}
        reactConceptsDescription={props.items[2].description}
      />
      <ConceptsItem
        reactConceptsImage={props.items[3].image}
        reactConceptsTitle={props.items[3].title}
        reactConceptsDescription={props.items[3].description}
      />
    </div>
  );
};

export default Concepts;
