import React from 'react'
import Counter from './Practice/Counter'
import ToggleMessage from './Practice/ToggleMessage'
import UserInput from './Practice/UserInput'
import Form from './Practice/Form'
import Array from './Practice/Array'
import Todo from './Practice/Todo'
import TodoApp from './Practice/TodoApp'
import Quiz from './Practice/Quiz'
import ExpenseTracker from './Practice/ExpenseTracker'
import Home from './Practice/Home'
import { Link, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path = '/' element = {<Home/>}  />
        <Route path = '/todo' element = {<TodoApp/>}  />
        <Route path = '/quiz' element = {<Quiz/>} />
        <Route path = '/expense' element = {<ExpenseTracker/>} />
      </Routes>
      {/* <Counter/> */}
      {/* <ToggleMessage/> */}
      {/* <UserInput/> */}
    {/* <Form/> */}
    {/* <Array/> */}
    {/* <Todo/> */}
    {/* <TodoApp/> */}
    {/* <Quiz/> */}
    {/* <ExpenseTracker/> */}
    {/* <Home/> */}
    </div>
  )
}

export default App
