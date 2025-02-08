import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
)
