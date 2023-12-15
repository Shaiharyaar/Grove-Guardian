import React from 'react'
import {
  HomePage,
  ErrorPage,
  NotFoundPage,
  ProfilePage,
  FAQPage,
  StatisticsPage,
  AddContributionPage,
  AddTreePage,
} from '../pages'
import { createBrowserRouter } from 'react-router-dom'

export default createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
  },

  {
    path: '/statistics',
    element: <StatisticsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/add-contribution',
    element: <AddContributionPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/add-tree',
    element: <AddTreePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/faq',
    element: <FAQPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: '*',
    element: <NotFoundPage />,
    errorElement: <ErrorPage />,
  },
])
