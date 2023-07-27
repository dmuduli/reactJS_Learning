import React from "react";
import "./Card.css";

function Card(props) {
  const classes = `card rounded-lg bg-gray-800 ${props.className}`;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
