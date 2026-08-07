import React, { useReducer } from 'react'
import counterReducer from './counter'

const CounterReducer = () => {
    const [count, dispatch] = useReducer(counterReducer,0)
  return (
    <div className='flex flex-col  items-center'>
        <h1>{count}</h1>
      <button onClick={()=>dispatch({type:'increase', payload:1})}>Increase</button>
      <button onClick={()=>dispatch({type:'increase',payload:5})}>Increase by 5</button>
      <button onClick={()=>dispatch({type:'increase',payload:10})}>Increase by 10</button>
      <button onClick={()=> dispatch({type: 'decrease', payload:1})}>Decrease</button>
      <button onClick={()=> dispatch({type: 'decrease', payload:5})}>Decrease by 5</button>
      <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterReducer
