
import ReactDOM from 'react-dom/client'
import React  from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Preview from "./Components/Preview";
import TestPreview from './Components/TestPreview/index.jsx'
import App from './App.jsx'
import './index.css'







//import pages the router will use to conditionally show the appropriate views
import Home from './Components/Hero';


const router = createBrowserRouter([
  //defining accessible routes
  {
    path: '/',
    element: <App />,
    errorElement: <p>This is not working</p>,
    
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/preview',
        element: <Preview/>
      },
      {
        path: '/create',
        element: <TestPreview/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);



