import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { AuthContext } from './AuthContext'
import { auth } from '../firebase/firebase.init'
import { useEffect, useState } from 'react'
import { signOut } from "firebase/auth";


function AuthProvider({children}) {
  const [user, setUser] = useState(null)
  const [loading, setloading] = useState(true)

  const registerUser =(email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const loginUser = (email,password) =>{
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const handleSignout = () =>{
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      setloading(false)
    })
    return() =>{ unsubcribe()}
  },[])

  const authInfo ={
    user,
    registerUser,
    loginUser,
    loading,
    handleSignout
    
  }
  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  )
}

export default AuthProvider