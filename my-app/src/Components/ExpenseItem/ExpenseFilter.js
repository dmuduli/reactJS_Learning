import React from "react";

const ExpenseFilter = (props) => {
  // console.log(props);
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  // console.log(dropdownChangeHandler);

  return (
    <div className="expense-filter">
      <div className="bg-black p-3 mt-4 flex items-center justify-between gap-10">
        <label className="text-white">Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
