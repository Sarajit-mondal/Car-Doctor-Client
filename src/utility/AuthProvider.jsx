import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from './Firebase.cofige'
import { signInWithEmailAndPassword } from 'firebase/auth/cordova'

export const authContext = createContext()
function AuthProvider({children}) {
const [user,setUser] = useState()


// ovgerver work like user have or haven't check this
useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser)
  })

  return ()=>{
     unsubscribe()
  }
  
},[])

// create new user
const createUser = (email,password) =>{
  return createUserWithEmailAndPassword(auth,email,password)
}
// logIn user
const logInUser = (email,password) =>{
  return signInWithEmailAndPassword(auth,email,password)
}


const info = {user,createUser,logInUser}
  return (
    <authContext.Provider value={info}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider
