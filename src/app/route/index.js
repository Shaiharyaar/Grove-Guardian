import React from 'react'
import { RouterProvider } from 'react-router-dom'
import appRoutes from './appRoutes'

const Navigation = () => {
  return <RouterProvider router={appRoutes} />
}

export default Navigation
