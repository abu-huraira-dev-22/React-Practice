import React, { useState } from 'react'

const ExpenseTracker = () => {
const [expense, setExpense] = useState([])
const [amount, setamount] = useState()
const [newCategory,setNewCategory] =useState('')
const [newDescription, setNewDescription] = useState('')

const addExpense = ()=>{
    const newExpense ={
        id: Date.now(),
        amount: amount,
        category: newCategory,
        description: newDescription
    }
    setExpense([...expense, newExpense])
}

const listExpense = expense.map((item,id)=>{
return (
    <li key={id}>{item.amount}<br/>{item.newCategory}<br/>{item.newDescription}</li>
)
})


  return (
    <div>
      <input type="text" placeholder='Amount' onChange={(e)=> setamount(e.target.value)} value={amount}/>
      <input type="text" placeholder='Food' onChange={(e) => setNewCategory(e.target.value)} value={newCategory}  />
      <input type="text" placeholder='Description' onChange={(e)=>setNewDescription(e.target.value)} value={newDescription}/>
      <button onClick={addExpense}>Add Expense</button>
      <ul>{listExpense}</ul>
    </div>
  )
}

export default ExpenseTracker
