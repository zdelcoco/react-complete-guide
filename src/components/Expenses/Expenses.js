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

      <ExpenseItem
        title={props.expenseItems[0].title} 
        amount={props.expenseItems[0].amount} 
        date={props.expenseItems[0].date}
      />
      <ExpenseItem 
        title={props.expenseItems[1].title} 
        amount={props.expenseItems[1].amount} 
        date={props.expenseItems[1].date}
      />
      <ExpenseItem 
        title={props.expenseItems[2].title} 
        amount={props.expenseItems[2].amount} 
        date={props.expenseItems[2].date}
      />
      <ExpenseItem 
        title={props.expenseItems[3].title} 
        amount={props.expenseItems[3].amount} 
        date={props.expenseItems[3].date}
      />
    </Card>
  );

}

export default Expenses;