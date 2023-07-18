import "./ConceptsHeader.css";

function ConceptsHeader(props) {
  return (
    <div className="concepts-header">
      <img src={props.image} alt={props.title} />
      <h2 className="concepts-title">{props.title}</h2>
      <div className="concepts-description">{props.description}</div>
    </div>
  );
}

export default ConceptsHeader;
