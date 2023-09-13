import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData);
    setShowForm(false);
  }

  const onAddNewExpenseClickHandler = () => {
    setShowForm(true);
  }

  const onCancelFormHandler = () => {
    setShowForm(false);
  }

  return (
    <div className='new-expense'>
      {!showForm && (<button type="button" onClick={onAddNewExpenseClickHandler}>Add New Expense</button>)}
      {showForm && (<ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancelForm={onCancelFormHandler}/>)}
    </div>
  )
}

export default NewExpense;
