import React from 'react'
import { Header,AppContent,Footer } from '../components'
import { useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <>
        <Header/>
        <div>
            <AppContent/>
        </div>
        <div>
            <Footer/>
        </div>
    </>
  )
}

export default Layout