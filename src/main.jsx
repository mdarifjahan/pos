import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


import Signup from './components/signup/Signup';
import LoginOrSignup from './components/LoginOrSignup';
import ForgetPass from './components/ForgetPass';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginOrSignup/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/forgets",
    element: <ForgetPass/>,
  },
  
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/*  <App/> */}
   <RouterProvider router={router} />
  </StrictMode>
)
