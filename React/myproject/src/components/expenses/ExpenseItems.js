import React, {useState} from 'react';

import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate.js';

function ExpenseItems(props) {
    const[title ,setTitle]=useState(props.title);

    const clickHandler=()=>{
        setTitle('Updated!!!');
    
    }

    // const expenseDate= new Date(2024,7,22);
    // const expenseTitle='Car Maintenance';
    // const expenseAmount=872.90;

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={()=>{clickHandler()}}>Change Title</button>
        </div>
    );
  }
  
  export default ExpenseItems;