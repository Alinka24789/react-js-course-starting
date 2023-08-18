import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import {useState} from "react";

function Expenses(props) {
  const [year, setYear] = useState('2020');

  const onYearSelectHandler = selectedYear => {
    setYear(selectedYear);
    console.log(selectedYear);
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter onYearSelect={onYearSelectHandler} selectedYear={year}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
    </Card>
  )
}

export default Expenses;
