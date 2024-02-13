
import ReactDOM from 'react-dom/client'
import React  from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import './index.css'







//import pages the router will use to conditionally show the appropriate views
import Home from './Components/Hero';
// import About from './pages/About';
// import Donate from './pages/Donate';
// import ErrorPage from './pages/ErrorPage';

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
      // {
      //   path: '/about',
      //   element: <About/>
      // },
      // {
      //   path: './donate',
      //   element: <Donate />
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);



