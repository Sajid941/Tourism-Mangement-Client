import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../services/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export  const AuthContext= createContext(null)

const auth =getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser)
        })
        return ()=>unSubscribe()
    },[])

    const authInfo = {
        user,
        auth,
        createUser,
        logIn,
        logInWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;