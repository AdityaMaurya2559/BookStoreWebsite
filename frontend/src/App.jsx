import React from 'react'
import Home from './home/home'
import { Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
function App() {
  return (
    <>
     {/* <Home/>
     <Course/> */}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
    </>
  )
}

export default App