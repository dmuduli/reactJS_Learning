import React from "react";
import ConceptsItem from "./ConceptsItem/ConceptsItem";

const Concepts = (props) => {
  return (
    <div>
      <ConceptsItem
        reactConceptsImage={props.items[0].image}
        reactConceptsTitle={props.items[0].title}
        reactConceptsDescription={props.items[0].description}
      />
    </div>
  );
};

export default Concepts;
