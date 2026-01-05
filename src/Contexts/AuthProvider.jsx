import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import { AuthContext } from './AuthContext'
import { auth } from '../firebase/firebase.init'
import { useEffect, useState } from 'react'
import { signOut } from "firebase/auth";
import { GoogleAuthProvider,signInWithPopup  } from "firebase/auth";

const provider = new GoogleAuthProvider();

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

  const GoogleLogin =()=>{
    setloading(true)
    return signInWithPopup(auth, provider)
  }

  const handleSignout = () =>{
    setloading(true)
    return signOut(auth)
  }
  
  const ForgetPassword = (email) =>{
    setloading(true)
    return sendPasswordResetEmail(auth,email)
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
    handleSignout,
    GoogleLogin,
    setUser,
    ForgetPassword
  }
  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  )
}

export default AuthProvider