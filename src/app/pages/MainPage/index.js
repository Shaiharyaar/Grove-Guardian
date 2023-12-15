import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '../../../modules/common/Containers/Container'
import './style.css'
import Header from '../../../modules/common/Header'
const MainPage = () => {
  return (
    <>
      <Header />
      <Container className='main-page-container'>
        <Outlet />
      </Container>
    </>
  )
}

export default MainPage
