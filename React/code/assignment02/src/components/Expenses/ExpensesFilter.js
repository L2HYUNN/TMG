import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ onSaveExpenseYear }) => {
  const [year, setYear] = useState("2022");

  const yearFilterHandler = (e) => {
    setYear(e.target.value);
    onSaveExpenseYear(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={year} onChange={yearFilterHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
