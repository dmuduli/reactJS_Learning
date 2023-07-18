import ConceptsCard from "../ConceptsCard/ConceptsCard";
import "./ConceptsItem.css";

function ConceptsItem(props) {
  return (
    <ConceptsCard className="concepts-item">
      <img src={props.image} alt={props.title} />
      <h2 className="concepts-title">{props.title}</h2>
      <div className="concepts-description">{props.description}</div>
    </ConceptsCard>
  );
}

export default ConceptsItem;
