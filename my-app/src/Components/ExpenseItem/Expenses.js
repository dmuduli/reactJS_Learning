import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div>
      <ExpenseItem
        expensesTitle={props.items[0].title}
        expensesPrice={props.items[0].price}
        expensesDate={props.items[0].date}
      />
      <ExpenseItem
        expensesTitle={props.items[1].title}
        expensesPrice={props.items[1].price}
        expensesDate={props.items[1].date}
      />
      <ExpenseItem
        expensesTitle={props.items[2].title}
        expensesPrice={props.items[2].price}
        expensesDate={props.items[2].date}
      />
    </div>
  );
};

export default Expenses;
