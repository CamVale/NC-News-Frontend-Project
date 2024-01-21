import { createContext, useEffect, useState } from "react"


export const UserContext = createContext()

export default function UserProvider({ children }){
    const [user, setUser] = useState('')

    useEffect(()=>{
        setUser(localStorage.getItem('user'))
    }, [])
    

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}