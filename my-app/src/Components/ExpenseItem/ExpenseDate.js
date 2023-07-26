import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.expenseDate.toLocaleString("en-Us", { month: "long" });
  const day = props.expenseDate.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.expenseDate.getFullYear();
  return (
    <div className="expense-item_date rounded-md bg-teal-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
