import React from "react";
import ExpenseItems from "./ExpenseItems.js";
import { ExpensesFilter } from "./ExpensesFilter.js";
import Card from "../UI/Card.js";
import './Expenses.css' ;

const Expenses=(props)=>{
  // const [filteredYear, setFilterYear]=useState('2021');

  // const filterChangeHandler=selectedYear=>{
  //   setFilteredYear(selectedYear);
  // }


return(
        <Card className="expenses">
         {/* <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} /> */}
        {/*{props.items.map(expense=> <ExpenseItems title={expense.title} amount={expense.amount} date={expense.date} />)} */}
      <ExpenseItems title={props[0].title} amount={props[0].amount} date={props[0].date}></ExpenseItems>
      <ExpenseItems title={props[1].title} amount={props[1].amount} date={props[1].date}></ExpenseItems>
      <ExpenseItems title={props[2].title} amount={props[2].amount} date={props[2].date}></ExpenseItems>
      <ExpenseItems title={props[3].title} amount={props[3].amount} date={props[3].date}></ExpenseItems>

        </Card>
    );
}
export default Expenses;

