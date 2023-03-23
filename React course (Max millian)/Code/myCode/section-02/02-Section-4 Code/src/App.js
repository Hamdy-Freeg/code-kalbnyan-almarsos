import React from 'react';
import ExpenseComponent from './components/Expenses/ExpenseComponent';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2023, 3, 1),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2023, 3, 21),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023, 3, 25),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2023, 3, 11),
    },
  ];
  function addExpenseHandler(expenes) {
    console.log('in app.js');
    console.log(expenes);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseComponent expenses={expenses} />
    </div>
  );

  // React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's Get Started"),
  //   React.createElement(ExpenseComponent, { expenses: expenses })
  // );
}

export default App;
