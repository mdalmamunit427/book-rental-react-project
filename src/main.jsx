import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import NewReleases from './pages/new-releases/NewReleases.jsx';
import Home from './pages/Home.jsx';
import TrendingBooks from './pages/trending/TrendingBooks.jsx';
import UpcomingBooks from './pages/upcoming/UpcomingBooks.jsx';
import FavoriteBooks from './pages/favorite/FavoriteBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/new-releases",
        element: <NewReleases/>
      },
      {
        path: "/trending-books",
        element: <TrendingBooks/>
      },
      {
        path: "/upcoming-books",
        element: <UpcomingBooks/>
      },
      {
        path: "/favorite-books",
        element: <FavoriteBooks/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
