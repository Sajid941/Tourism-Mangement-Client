import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../services/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [dataLoading, setDataLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)

        })
        return () => unSubscribe()
    }, [])

    const authInfo = {
        user,
        auth,
        createUser,
        logIn,
        logInWithGoogle,
        logInWithGithub,
        logOut,
        loading,
        dataLoading,
        setDataLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;