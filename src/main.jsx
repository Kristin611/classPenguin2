import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import css
import './index.css';
import '../src/Components/createPostButton.css';
import '../src/Components/loginButton.css';

//import pages the router will use to conditionally show the appropriate views
import App from './App.jsx';
import Home from './pages/Hero';
import About from './pages/About';
import Donate from './pages/Donate';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  //defining accessible routes
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: './donate',
        element: <Donate />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);



