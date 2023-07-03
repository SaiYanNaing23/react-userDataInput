import React, { useState } from 'react';
import Expense from './Expense/Expense';
import NewExpense from './ExpenseForm/NewExpense';
const addUser = [{
  userName : "Max",
  age : "31",
},]

function App() {
  const [expense,setExpense] = useState(addUser)
  const saveExpenseHandler = saveData =>{
    // addUser.push(saveData)
    setExpense((expense) => [saveData,...expense])
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onSaveExpense = {saveExpenseHandler}></NewExpense>
      <Expense userData = {expense}></Expense>
    </div>
  );
}

export default App;
