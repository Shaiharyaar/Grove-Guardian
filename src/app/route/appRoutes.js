import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {
  ContributionsPage,
  ErrorPage,
  FAQPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  StatisticsPage,
} from '../pages'
import AddContributionPage from '../pages/AddContributionPage'
import MainPage from '../pages/MainPage'

export default createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/statistics',
        element: <StatisticsPage />,
      },
      {
        path: '/add-contribution',
        element: <AddContributionPage />,
      },
      {
        path: '/contributions',
        element: <ContributionsPage />,
      },
      {
        path: '/faq',
        element: <FAQPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: '*',
    element: <NotFoundPage />,
    errorElement: <ErrorPage />,
  },
])
