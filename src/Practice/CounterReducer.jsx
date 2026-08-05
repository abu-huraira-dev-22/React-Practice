import React, { useReducer } from 'react'
import counterReducer from './counter'

const CounterReducer = () => {
    const [count, dispatch] = useReducer(counterReducer,0)
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>dispatch({type:'increase'})}>Increase</button>
      <button onClick={()=> dispatch({type: 'decrease'})}>Decrease</button>
      <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterReducer
