import React from 'react'
import { Header,AppContent,Footer } from '../components'

const Layout = () => {
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