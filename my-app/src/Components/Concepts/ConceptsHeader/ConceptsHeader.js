import "./ConceptsHeader.css";

function ConceptsHeader(props) {
  return (
    <div className="concepts-header">
      <img src={props.reactConceptsImage} alt={props.reactConceptsTitle} />
      <h2 className="concepts-title">{props.reactConceptsTitle}</h2>
      <div className="concepts-description">
        {props.reactConceptsDescription}
      </div>
    </div>
  );
}

export default ConceptsHeader;
