import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  // const [filterInfoText, setFilterInfoText] = useState("2019, 2021 & 2022");
  // const filterChangeHandler = (selectedYear) => {
  //   setFilteredYear(selectedYear);
  //   if (selectedYear === "2019") {
  //     setFilterInfoText("2020, 2021 & 2022");
  //   }
  // };
  let filterInfoText = "2018, 2019, 2020 & 2022";
  if (filteredYear === "2022") {
    filterInfoText = "2018, 2019, 2020 & 2021";
  } else if (filteredYear === "2021") {
    filterInfoText = "2018, 2019, 2020 & 2022";
  } else if (filteredYear === "2020") {
    filterInfoText = "2018, 2019, 2021 & 2022";
  } else if (filteredYear === "2019") {
    filterInfoText = "2018, 2020, 2021 & 2022";
  } else {
    filterInfoText = "2019, 2020, 2021 & 2022";
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <p>Data for year {filterInfoText}</p>
      <div>
        {props.items.map((expenses) => (
          <ExpenseItem
            expensesTitle={expenses.title}
            expensesPrice={expenses.price}
            expensesDate={expenses.date}
          />
        ))}
        {/* <ExpenseItem
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
        /> */}
      </div>
    </>
  );
};

export default Expenses;
