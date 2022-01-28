import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
} from "@firebase/firestore";
import { auth, db } from "./firebase";


export const signInGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const response = await signInWithPopup(auth, provider);
    return response
  } catch (error) {
    throw error;
  }
};

export const logOut = () => {
  signOut(auth).catch((error) => console.log(error));
 
};

export const createChannel = (newChannel) => {
  addDoc(collection(db, "channels"), { names: newChannel })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const addMessages =  (value, id, user) => {
  const messages = {
    message: value,
    timestamp: serverTimestamp(),
    user,
  };
    addDoc(collection(db, "channels", id, "messages"), messages).then((res)=> console.log(res)).catch((err)=> console.log(err))
  
};
export const leaveChannel =  (id) => {
  deleteDoc(doc(db, "channels", id)).then((res)=> window.location.reload());
};
