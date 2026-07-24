import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    function increaseHandler (){      
        setCount(count+1)       
    }
    function decreaseHandler(){
        if(count >0){
            setCount(count -1)
        }
    }
    function resetHandler(){
        setCount(0)
    }

  return (
    <div className='m-60'>
        <h1 id='count' className='text-center text-xl'>{count}</h1>
        <div className='flex justify-center items-center'>
      <button className='p-3 bg-blue-500 m-5 text-center rounded' onClick={increaseHandler}>Increase</button>
      <button className='p-3 bg-red-500 m-5 text-center rounded'  onClick={decreaseHandler}>Decrease</button>
      <button className='p-3 bg-purple-500 m-5 text-center rounded'  onClick={resetHandler}>Reset</button>
        </div>
    </div>
  )
}

export default Counter
