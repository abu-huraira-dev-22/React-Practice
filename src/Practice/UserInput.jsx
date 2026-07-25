import React, { useState } from 'react'

const UserInput = () => {
    const [name, setName] = useState("")
  return (
    <div className='flex justify-center items-center w-full h-[80vh]'>
     <div className='flex flex-col items-center gap-5 text-2xl'>
       <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter your name" className="input" value={name}/>
    <h1>Hello {name}</h1>
     </div>
    </div>
  )
}

export default UserInput
