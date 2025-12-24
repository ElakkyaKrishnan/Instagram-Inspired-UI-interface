import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ViewStory from './ViewStory.jsx'
import StoryView from './StoryView.jsx'
import Profile from './Profile.jsx'
import Profilepage from './Profilepage.jsx'
import DefaultPage from './DefaultPage.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/story/:id/:tot',
      element:<ViewStory/>
    },
    {
      path:'/profile',
      element:<Profilepage/>
    },
    {
      path:'/defaultpage',
      element:<DefaultPage/>
    }
    
  ]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
