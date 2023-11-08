import React, { useState, useRef } from 'react';
import Header from './Header';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../utils/firebaseConf';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';



const Login = () => {

  const [isSignInForm, setisSignInForm] = useState(true);
   const dispatch = useDispatch();

  const naviagte = useNavigate();

  const formname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm)


  }

  const buttonSubmit = () => {

    //console.log(email.current.value);

    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        dispatch(addUser);

        updateProfile(auth.currentUser, {
          displayName: formname.current.value, photoURL: "https://lh3.googleusercontent.com/ogw/AGvuzYbVhfAS0ImTl2TG_I-ZPCce56vTlXEwWca9Zu_7OQ=s64-c-mo"
        }).then(() => {
          naviagte("/browse")
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });



        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
        naviagte("/SignIn")
      });
 }



  const buttonSignInSubmit = () => {

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        naviagte("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        naviagte("/SignIn")
      });


  }


  return (
    <div>
      <div className='absolute'>
        <Header />
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className=' absolute w-3/12 p-12 bg-black my-36  mx-auto right-0 left-0 text-white bg-opacity-80 '>
        <h1 className=' font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input ref={email} type="text" placeholder="Email Address" className="my-2 p-2 w-full bg-gray-500 " />
        {!isSignInForm && (<input ref={formname} type='text' placeholder='Full name ' className="my-2 p-2 w-full bg-gray-500 " />)}

        <input ref={password} type="password" placeholder='Password' className=' my-2 p-2 w-full bg-gray-500 ' />
        <button onClick={!isSignInForm ? buttonSubmit : buttonSignInSubmit} className='p-4 my-10 bg-red-600 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p onClick={toggleSignInForm} className=' p-2 cursor-pointer'> New to Netflix? Sign Up Now </p>
      </form>


    </div>


  )
}

export default Login