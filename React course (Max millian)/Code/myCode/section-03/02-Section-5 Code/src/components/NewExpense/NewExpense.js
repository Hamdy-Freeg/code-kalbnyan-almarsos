import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  function onSaveExpenseDateHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 1000000).toString(),
    };
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={onSaveExpenseDateHandler} />
    </div>
  );
}

export default NewExpense;
