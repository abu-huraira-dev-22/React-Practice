import React from 'react'

const Array = () => {
    const fruits = ["Apple", "Banana", "Mango", "Orange"];
    const listFruits = fruits.map((fruit)=>{
        return <li>{fruit}</li>
    })
  return (
    <div>
        <ul>{listFruits}</ul>
    </div>
  )
}

export default Array
