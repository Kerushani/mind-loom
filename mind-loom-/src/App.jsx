import { useState } from 'react'
// import ReactDOM from 'react-dom/client.js'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard, { dashboardLoader, dashboardAction } from "./pages/Dashboard";
import Error from "./pages/Error";


//Libraries
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Layouts
import Main, { mainLoader } from './layouts/Main';

//Actions
import { logoutAction } from './actions/logout';

function App() {

  const router = createBrowserRouter([  
    {
      path:"/",
      element: <Main />,
      loader: mainLoader,
      errorElement: <Error />,
      children:[
        {
          index: true,
          element: <Dashboard />,
          loader: dashboardLoader,
          action: dashboardAction,
          errorElement: <Error />,
        },
        {
          path:"logout",
          element:<p>logged out</p>,
          action: logoutAction
        }  
      ]
    },
    {
      path: "*",
      element: <Error />
    },
    
  ])

  return (
    <div>
      <RouterProvider router = {router} />
      <ToastContainer />
    </div>
  )
}

export default App
