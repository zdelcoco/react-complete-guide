import {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2023'); // could refactor this to point to current year

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return(
    <Card className="expenses">

      <ExpensesFilter 
        onChangeFilter={changeFilterHandler}
        defaultDate={filteredYear}
      />

      {props.expenseItems.map(expense => (
        <ExpenseItem 
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date}
        />
      ))}
      
    </Card>
  );

}

export default Expenses;