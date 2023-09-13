import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState('2020');

  const onYearSelectHandler = selectedYear => {
    setYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === year;
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onYearSelect={onYearSelectHandler}
        selectedYear={year}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses;
