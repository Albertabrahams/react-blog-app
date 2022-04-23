// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqzP_Qe5UD4BH3YqR5HaelDlh0qTObgf0",
    authDomain: "movieapp-e9023.firebaseapp.com",
    projectId: "movieapp-e9023",
    storageBucket: "movieapp-e9023.appspot.com",
    messagingSenderId: "683082563183",
    appId: "1:683082563183:web:f1afebecbd3225bd61d79a",
    measurementId: "G-N9NLL9MZJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate ) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    //   //? kullanıcı profilini güncellemek için kullanılan firebase metodu
    //   await updateProfile(auth.currentUser, {
    //     displayName: displayName,
    //   });
      navigate("/login");
    //   toastSuccessNotify("Registered successfully!");
      console.log(userCredential);
    } catch (err) {
    //   toastErrorNotify(err.message);
      alert(err.message);
    }
  };
  
  export const signIn = async (email, password, navigate) => {
    try {
      //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
    //   toastSuccessNotify("Logged in successfully!");
      console.log(userCredential);
    } catch (err) {
    //   toastErrorNotify(err.message);
      alert(err.message);
    }
  };

  export const logOut = () => {
    signOut(auth);
    // toastSuccessNotify("Logged out successfully!");
  };