import { useContext } from "react"
import { authContext } from "./AuthProvider"
import { Navigate } from "react-router-dom"


function PrivateRoute({children}) {
 const {user} = useContext(authContext)

 if(user){
    return (
        <div>{children}</div>
    )
 }
  return (
  <Navigate to="/logIn"></Navigate>
  )
}

export default PrivateRoute
