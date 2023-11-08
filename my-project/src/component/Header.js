import React from 'react'
//import  auth from "../utils/firebaseConf";
import { useEffect } from 'react';

import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import app from '../utils/firebaseConf';
import { useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  const naviagte = useNavigate();

  const user = useSelector(store => store.user);

const handleSignOut = () =>{

  

  const auth = getAuth(app);
signOut(auth).then(() => {
  // Sign-out successful.
 // naviagte("/");
}).catch((error) => {
  // An error happened.
});

}

useEffect (() =>{

  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const { uid, email, displayName,photoURL}= user;
      dispatch (addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
      naviagte("/browse");
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser())
      naviagte("/");
    }
  });
}, []);


  return (
    
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between'>
        <img
        className='w-44'
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
           alt="logo"
           />
{user && <div className='flex p-2'>
 <img className='w-12 h-12' alt= "usericon" src={user?.photoURL}/>
<button onClick={handleSignOut}>(Sign Out)</button>
</div> }


    </div>

   

   

  )
}

export default Header