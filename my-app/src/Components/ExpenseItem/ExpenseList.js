import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  //   console.log(props.items);
  if (props.items.length === 0) {
    return (
      <h2 className="text-2xl font-bold leading-7 text-gray-900">
        No expenses found
      </h2>
    );
  }

  return (
    <>
      {props.items.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          expensesTitle={expenses.title}
          expensesPrice={expenses.amount}
          expensesDate={expenses.date}
        />
      ))}
    </>
  );
};

export default ExpenseList;
