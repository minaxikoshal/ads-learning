import './ExpenseItems.css';
import './ExpenseDate.js';
import ExpenseDate from './ExpenseDate.js';

function ExpenseItems(props) {
    // const expenseDate= new Date(2024,7,22);
    // const expenseTitle='Car Maintenance';
    // const expenseAmount=872.90;

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    );
  }
  
  export default ExpenseItems;