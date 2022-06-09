import './ExpenseItems.css';

function ExpenseItems() {
    const expenseDate= new Date(2024,7,22);
    const expenseTitle='Car Maintenance';
    const expenseAmount=872.90;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    );
  }
  
  export default ExpenseItems;