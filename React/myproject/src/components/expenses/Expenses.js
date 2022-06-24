import React, { useState } from 'react';
import { ExpensesFilter } from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";
import Card from "../UI/Card.js";
import './Expenses.css' ;

const Expenses=(props)=>{
  const [filteredYear, setFilteredYear]=useState('2021');
  const filterChangeHandler=selectedYear=>{
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );


}
export default Expenses;

