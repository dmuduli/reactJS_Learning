import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expensesTitle);
  const changeClickHandler = () => {
    setTitle("Updated");
  };
  const [applyDiscount, setApplyDiscount] = useState(100);
  const changeValueHandler = () => {
    setApplyDiscount(200);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.expensesDate} />
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        {title}
      </h2>
      <div className="expense-item__price mr-3">{props.expensesPrice}</div>
      <button
        onClick={changeClickHandler}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Change Title
      </button>

      <p className="text-white mx-2">${applyDiscount}</p>
      <button
        onClick={changeValueHandler}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Apply Discount
      </button>
    </Card>
  );
}

export default ExpenseItem;
