import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.module.css";
import "./NewExpense.css";

const NewExpenseForm = (props) => {
  // const [startDate, setStartDate] = useState(new Date());
  // const DatePickerModal = () => {
  //   setStartDate();
  // };

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
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };
  const submitFormHandler = (event) => {
    event.preventDefault(); // this function use for not refresh page after click on submit button
    // console.log("Submit your form");
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    // console.log(enteredAmount);
    // console.log("Deepak" + expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <div className="new-expense_controls bg-purple-400 p-3 mt-4">
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
              type="number"
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
            {/* <DatePicker
                onChange={dateChangeHandler}
                className="rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              /> */}
          </div>
          <div className="flex">
            <button
              onClick={props.onCancel}
              class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 mr-3 border border-blue-500 hover:border-transparent rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewExpenseForm;
