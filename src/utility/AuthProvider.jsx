import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from './Firebase.cofige'
import { signInWithEmailAndPassword } from 'firebase/auth/cordova'

export const authContext = createContext()
function AuthProvider({children}) {
const [user,setUser] = useState()
const [loading,setLoading] = useState(true)


// ovgerver work like user have or haven't check this
useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser)
    setLoading(false)
  })

  return ()=>{
     unsubscribe()
  }
  
},[])

// create new user
const createUser = (email,password) =>{
  return createUserWithEmailAndPassword(auth,email,password)
  setLoading(true)
}
// logIn user
const logInUser = (email,password) =>{
  return signInWithEmailAndPassword(auth,email,password)
  setLoading(true)
}


const info = {user,createUser,logInUser,loading,setLoading}
  return (
    <authContext.Provider value={info}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider
