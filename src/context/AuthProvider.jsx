import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../services/firebase.config";

export  const AuthContext= createContext(null)

const auth =getAuth(app)


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider= new GithubAuthProvider()

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const logInWithGithub=()=>{
        return signInWithPopup(auth,gitHubProvider)
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
        logInWithGithub,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;