import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.expenseDate.toLocaleString("en-Us", { month: "long" });
  const day = props.expenseDate.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.expenseDate.getFullYear();
  return (
    <div className="expense-item_date">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
