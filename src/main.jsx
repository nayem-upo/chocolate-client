import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import AddChocolate from './components/AddChocolate';
import UpdateChocolate from './components/UpdateChocolate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:"/addchocolate",
    element: <AddChocolate></AddChocolate>
  },
  {
    path:"/updatechocolate/:id",
    element: <UpdateChocolate></UpdateChocolate>,
    loader: ({params})=> fetch(`http://localhost:5000/chocolate/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
