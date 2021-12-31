import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth"
import { auth } from "./firebase"


export const isLoggedIn = () => {
    if(localStorage.getItem("fbase_key") !== null) {
        return true
    }
    else{
        return false
    }
}

export const signUp = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user)
    } catch(error){
        throw(error)
    }
    
}
export const signIn = async (email, password) => {
    try {
       const user = await signInWithEmailAndPassword(auth, email, password )
       console.log(user)
    } catch(error){
        throw(error)
    }
    
}
export const signInGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
    } catch(error){
        throw(error)
    }
    
}
export const logOut = async () => {
    try {
      await signOut(auth)

    } catch(error){
        throw(error)
    }
    
}