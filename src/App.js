import './App.css'
import ItemList from './components/ItemList'
import React, { useState } from 'react'
import NewExpense from './components/NewExpense'

function App() {
  
const arr = [
  {
    id: 'e1',
    date: new Date(2021, 2, 28),
    description: 'Car Insurance',
    price: 294.67
  },
  {
    id: 'e2',
    date: new Date(2020, 3, 20),
    description: 'Car Insurance2',
    price: 294.67
  },
  {
    id: 'e3',
    date: new Date(2021, 6, 4),
    description: 'Car Insurance3',
    price: 294.67
  },
  {
    id: 'e4',
    date: new Date(2021, 5, 18),
    description: 'Car Insurance4',
    price: 294.67
  }
]

const [expenses,setExpenses] = useState(arr)

const ExpenseData = (obj) => {
  const data = {
    ...obj
  }
  console.log(data);
  setExpenses([ ...expenses, data])
}



  return (
    <div className="App">
      <NewExpense onPassData={ExpenseData}/>
      <ItemList arr={expenses}/>
    </div>
  );
}

export default App;
