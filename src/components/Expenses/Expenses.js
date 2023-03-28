import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  return(
    <Card className="expenses">
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