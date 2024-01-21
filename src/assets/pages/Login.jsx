import { useContext } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../components/UserProvider";


export default function Login(){
    const {user, setUser}= useContext(UserContext)

    function handleLogin(){
        if (user){
          setUser('')
          localStorage.setItem('user', "")  
        } else{
          setUser('tickle122')
          localStorage.setItem('user', "tickle122")  
        }
        
    }

    return (
        <>
        <Button onClick={handleLogin}>{user ? "Log out" : "Login"}</Button>
        </>
    )
}