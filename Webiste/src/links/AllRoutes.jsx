import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../ComponentTwo/Register'
import LoginPopup from '../ComponentTwo/LoginPopup'
import Home from '../Component/Home/Home'
import Main from '../Component/Main/Main'
import Footer from '../Component/Footer/Footer'



const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<LoginPopup />}></Route>
        
        <Route path="/" element={<Home />} ></Route>
        <Route path="/main" element={  <Main />} ></Route>
        <Route path="/Footer" element={ <Footer />} ></Route>
      
      </Routes>
    </div>
  )
}

export default AllRoutes
