import { useContext } from "react"
import { authContext } from "./AuthProvider"
import { Navigate } from "react-router-dom"
import Loading from "../components/loading/Loading"


function PrivateRoute({children}) {
 const {user,loading} = useContext(authContext)
if(loading){
return <Loading></Loading>
}
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
