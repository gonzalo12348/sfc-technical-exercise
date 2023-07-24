import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages/landingPage';
// import OdourObservatory from './pages/odourObservatory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='AppLandingPage'>
      <LandingPage />
      </div>,
  },
  // {
  //   path: "odour-observatory",
  //   element: <div className='AppOdourObservatory'>
  //   <OdourObservatory />
  //   </div>,
  // },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
