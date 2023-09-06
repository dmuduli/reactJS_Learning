import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [isClickAddNewExpense, setIsClickAddNewExpense] = useState(false);
  const showExpenseFormHandler = () => {
    setIsClickAddNewExpense(true);
  };
  const cancelExpenseFormHandler = () => {
    setIsClickAddNewExpense(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString() * 1000000000,
    };
    props.onAddExpense(expenseData);
    // console.log(expenseData);
  };

  // Counter increase function
  const [counter, setCounter] = useState(0);
  const increaseCounterHeandler = () => {
    setCounter((prev) => prev + 1);
  };

  // Message change with limit of text function
  const [messageValid, setMessageValid] = useState("Invalid");
  const inputTextChange = (event) => {
    const checkValue = event.target.value;
    if (checkValue.trim().length > 3) {
      setMessageValid("Valid");
    } else {
      setMessageValid("Invalid");
    }
  };

  const [highlighted, setHighlighted] = useState(false);

  const toggleStyleHandler = () => {
    setHighlighted((isHighlighted) => !isHighlighted);
  };

  return (
    <>
      <div className="mb-3">
        {/* <p style={{ color: highlighted ? "red" : "black" }}>Style me</p> */}
        <p className={`${highlighted ? "invalid" : ""}`}>Style me</p>
        <button
          className="mt-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={toggleStyleHandler}
        >
          Toggle Style
        </button>
      </div>
      <div className="flex gap-10 mb-3 bg-red-100 p-3">
        <h4 className="text-lg font-bold border bg-white p-2">{counter}</h4>
        <button
          onClick={increaseCounterHeandler}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Increase
        </button>
      </div>

      <div className="flex items-center gap-10">
        <label>Your message</label>
        <input
          type="text"
          onChange={inputTextChange}
          className="rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {/* <input
              type="text"
              onChange={(event) =>
                inputChangeHandler("title", event.target.value)
              }
              className="rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            /> */}
        <p>{messageValid} message</p>
      </div>

      <h1 className="text-lg font-bold border-b bg-white p-2 mb-3">
        Add Expense
      </h1>
      {!isClickAddNewExpense && (
        <div className="bg-purple-400 p-4 text-center">
          <button
            onClick={showExpenseFormHandler}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add New Expense
          </button>
        </div>
      )}

      {isClickAddNewExpense && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelExpenseFormHandler}
        />
      )}
    </>
  );
};

export default NewExpense;
