import React from 'react'
import { Header,AppContent,Footer } from '../components'
import { useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  const pathname = location.pathname
  const text = "Register to get the app."
  return (
    <>
    {pathname.includes("auth/register") ?
    (
      <Header text={text}/>
    ):(
      <Header/>
    )
    }
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