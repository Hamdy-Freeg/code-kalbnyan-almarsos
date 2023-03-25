import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [addNew, setAddNew] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    cancelNewHandler();
  };

  function addNewHandler() {
    setAddNew(true);
  }
  function cancelNewHandler() {
    setAddNew(false);
  }

  let content;

  if (!addNew && <button onClick={addNewHandler}>Add New Expense.</button>) {
    content = <button onClick={addNewHandler}>Add New Expense.</button>;
  } else {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelNewHandler}
      />
    );
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
