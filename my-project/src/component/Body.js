import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import Login from './Login';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
 import { auth} from "../utils/firebaseConf";
 import { useDispatch } from 'react-redux';
 
 import app from '../utils/firebaseConf';


const Body = () => {
  const dispatch = useDispatch();
  
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"browse",
            element:<Browse/>

        }
    ])

    
    
  return (
    <div>
    <RouterProvider router={appRouter}/>
  
    </div>
  )
}

export default Body