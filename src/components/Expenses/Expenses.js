import {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2023'); // could refactor this to point to current year

  const [rendered, setRendered] = useState('');             // this is so the full list of expenses displays first, then filters down after filter selection

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    setRendered('True');
  };

  const filteredExpenses = props.expenseItems.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(filteredExpense => (
      <ExpenseItem 
        key={filteredExpense.id}
        title={filteredExpense.title} 
        amount={filteredExpense.amount} 
        date={filteredExpense.date}
      />
    ))};

    let displayExpense = props.expenseItems.map(expense => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}
      />
    ));

    if (rendered) {
      displayExpense = expensesContent;
    }

  return(
    <Card className="expenses">
      <ExpensesFilter 
        onChangeFilter={changeFilterHandler}
        defaultDate={filteredYear}
      />
      {displayExpense}      
    </Card>
  );

}

export default Expenses;