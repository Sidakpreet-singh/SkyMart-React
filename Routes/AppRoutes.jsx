import React from 'react'
import {Routes,Route,Navigate} from 'react-router'
import Home from '../Components/Home'
import Shop from '../Components/Shop'
import About from '../Components/About'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import ProductDetails from '../Components/ProductDetails'

const AppRoutes = () => {

  return (
    <div>
        <Routes>
               <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
            <Route 
        path="/products/:id" 
        element={<ProductDetails />} 
    />
 
        </Routes>
      
    </div>
  )
}

export default AppRoutes
