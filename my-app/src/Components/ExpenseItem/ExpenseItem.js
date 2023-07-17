import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__date">
        {props.expensesDate.toISOString()}
      </div>
      <div className="expense-item__description">
        <h2>{props.expensesTitle}</h2>
        <div className="expense-item__price">{props.expensesPrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
