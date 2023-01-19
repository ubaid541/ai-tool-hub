import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'

function App() {

  return (
    <BrowserRouter>
    <Suspense>
      <Routes>
        <Route path="*" name="Home" element={<Layout />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
  )
}

export default App
