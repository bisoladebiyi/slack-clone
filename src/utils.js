import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "@firebase/auth"
import { addDoc, collection, serverTimestamp  } from "@firebase/firestore"
import { auth, db } from "./firebase"



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

export const createChannel = async (newChannel) => {
    try{
        await addDoc(collection(db, "channels"), {names: newChannel})
    }catch(error){
        console.log(error)
    }
}

export const addMessages = async (value, id) => {
    const messages = {
        message:value,
        timestamp: serverTimestamp(),
    }
    try{
        await addDoc(collection(db, "channels", id, "messages"), messages)
    }catch(error){
        console.log(error)
    }
}