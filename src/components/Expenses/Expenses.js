import {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2023'); // could refactor this to point to current year

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenseItems.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return(
    <Card className="expenses">
      <ExpensesFilter 
        onChangeFilter={changeFilterHandler}
        defaultDate={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses}/>      
      <ExpensesList items={filteredExpenses}/>     
    </Card>
  );

}

export default Expenses;