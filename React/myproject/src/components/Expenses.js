import ExpenseItems from "./Expenseitems";
import './Expenses.css' ;

function Expenses(props){
    return(
        <div>
      <ExpenseItems title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItems>
      <ExpenseItems title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItems>
      <ExpenseItems title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItems>
      <ExpenseItems title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItems>

        </div>
    );
}

export default expenses;