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

  const filteredExpenses = props.expenseItems.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return(
    <Card className="expenses">

      <ExpensesFilter 
        onChangeFilter={changeFilterHandler}
        defaultDate={filteredYear}
      />

      {/* alternate way
      {props.expenseItems.filter(expense => expense.date.getFullYear().toString() === filteredYear).map(filteredExpense =>
        <ExpenseItem 
          key={filteredExpense.id}
          title={filteredExpense.title} 
          amount={filteredExpense.amount} 
          date={filteredExpense.date}
        />
      )} */}

      {filteredExpenses.map(filteredExpense =>
        <ExpenseItem 
          key={filteredExpense.id}
          title={filteredExpense.title} 
          amount={filteredExpense.amount} 
          date={filteredExpense.date}
        />
      )}
      
    </Card>
  );

}

export default Expenses;