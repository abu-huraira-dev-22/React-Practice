import { createContext, useState } from "react";

const UserContext = createContext()

export const UserProvider = ({children})=>{
    const [user, setUser] = useState('Huraira')
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext