import React from 'react'
import { Header,AppContent,Footer } from '../components'
import { useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation();
const pathname = location.pathname;
const showHeader = pathname.includes("auth/register") && !pathname.includes("app"); // determine where to show header
const text = "Register to get the app.";

return (
  <>
    {/* Only show the header with or without text if the path does not include "app" */}
  {!pathname.includes("app") && (
    <Header text={showHeader ? text : undefined}/>
  )}
  <div>
      <AppContent/>
  </div>
  <div className='mt-auto'>
    {!pathname.includes("app") && 
    
      <Footer/>
    }
  </div>
  </>
);

}

export default Layout