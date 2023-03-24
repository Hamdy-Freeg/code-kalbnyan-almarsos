import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './ExpensessComponenet.css';

function ExpenseComponent(props) {
  const [filteredYear, setfilteredYear] = useState('2020');

  function FilterChangeHandler(selectedYear) {
    setfilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearChange={FilterChangeHandler}
        ></ExpensesFilter>
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default ExpenseComponent;
