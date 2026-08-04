import React, { useContext } from 'react'
import UserContext from './UserContext'

const Profile = () => {
    const {user,setUser} = useContext(UserContext)
  return (
    <div>
      <h1>{user}</h1>
      <button onClick={()=>setUser('Abu Huraira')}>update</button>
    </div>
  )
}

export default Profile
