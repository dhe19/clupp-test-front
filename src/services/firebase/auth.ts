import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { log } from "console";



export const logOut = async () => signOut(auth).then(() => console.log('session cerrada')).catch(e => console.log(e));

export const signIn = async(email:string, password:string) =>{
    let result =  null;
    let error = null;

    try{
        result = await signInWithEmailAndPassword(auth,email,password);
    }catch(e){
        error = e;
    }

    return {result, error}
}

export const signUp = async(email:string, password:string) =>{
    let result =  null;
    let error = null;

    try{
        result = await createUserWithEmailAndPassword(auth,email,password);
    }catch(e){
        error = e;
    }

    return {result, error}
}