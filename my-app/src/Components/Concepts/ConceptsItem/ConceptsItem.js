import ConceptsCard from "../ConceptsCard/ConceptsCard";
import "./ConceptsItem.css";

function ConceptsItem(props) {
  return (
    <ConceptsCard className="concepts-item">
      <img src={props.reactConceptsImage} alt={props.reactConceptsTitle} />
      <h2 className="concepts-title">{props.reactConceptsTitle}</h2>
      <div className="concepts-description">
        {props.reactConceptsDescription}
      </div>
    </ConceptsCard>
  );
}

export default ConceptsItem;
