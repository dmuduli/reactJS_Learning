import React from "react";
import "./NewExpense.css";

const NewExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label className="text-sm font-medium leading-6 text-gray-900">
            Title:
          </label>
          <input
            type="text"
            className="rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label className="text-sm font-medium leading-6 text-gray-900">
            Amount:
          </label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            className="rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="new-expense_control">
          <label className="text-sm font-medium leading-6 text-gray-900">
            Date:
          </label>
          <input
            type="text"
            min="2023-07-23"
            step="2023-07-26"
            className="rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
