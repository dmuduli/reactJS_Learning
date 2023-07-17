import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.expensesDate} />
      <h2 className="expense-item_title">{props.expensesTitle}</h2>
      <div className="expense-item__price">{props.expensesPrice}</div>
    </Card>
  );
}

export default ExpenseItem;
