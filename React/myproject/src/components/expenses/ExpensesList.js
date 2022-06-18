import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";
export const ExpensesList = (props) => {
  let expenseContent = " ";

  if (props.items.lenght === 0) {
    return <h2 className="expenses-list__fallback"> Found No Expense</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};