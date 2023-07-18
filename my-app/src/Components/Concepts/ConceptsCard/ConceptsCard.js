import React from "react";
import "./ConceptsCard.css";

function ConceptsCard(props) {
  const classes = `concepts-card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
}

export default ConceptsCard;
