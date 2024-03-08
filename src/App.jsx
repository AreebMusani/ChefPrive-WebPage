import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
