import React, { useState } from "react";
import "./NewExpense.css";

const NewExpenseForm = () => {
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

  // Counter increase function
  const [counter, setCounter] = useState(0);
  const increaseCounterHeandler = () => {
    setCounter((prev) => prev + 1);
  };

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // const titleChangeHandler = (event) => {
  //   console.log(event.target.value);
  // };

  // const titleChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value };
  //   });
  // };
  // const amountChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredAmount: event.target.value };
  //   });
  // };
  // const dateChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredDate: event.target.value };
  //   });
  // };

  // console.log(titleChangeHandler, amountChangeHandler, dateChangeHandler);

  // const inputChangeHandler = (identifer, value) => {
  //   if (identifer === "title") {
  //     // setEnteredTitle(value);
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredTitle: value };
  //     });
  //   } else if (identifer === "amount") {
  //     // setEnteredAmount(value);
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredAmount: value };
  //     });
  //   } else {
  //     // setEnteredDate(value);
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredDate: value };
  //     });
  //   }
  // };
  // console.log(userInput);

  // Form submit function
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitFormHandler = (event) => {
    event.preventDefault(); // this function use for not refresh page after click on submit button
    console.log("Submit your form");
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <div className="flex gap-10 mb-3 bg-red-100 p-3">
        <h4 className="text-lg font-bold border bg-white p-2">{counter}</h4>
        <button
          onClick={increaseCounterHeandler}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Increase
        </button>
      </div>

      <form onSubmit={submitFormHandler}>
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

        <div className="new-expense_controls bg-orange-100 p-3 mt-4">
          <div className="new-expense_control">
            <label className="text-sm font-medium leading-6 text-gray-900">
              Title:
            </label>
            <input
              type="text"
              className="rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
            {/* <input
              type="text"
              className="rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(event) =>
                inputChangeHandler("title", event.target.value)
              }
            /> */}
          </div>
          <div className="new-expense_control">
            <label className="text-sm font-medium leading-6 text-gray-900">
              Amount:
            </label>
            <input
              type="text"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
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
              value={enteredDate}
              onChange={dateChangeHandler}
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
    </div>
  );
};

export default NewExpenseForm;
