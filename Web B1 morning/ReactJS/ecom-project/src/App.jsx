import React, { useState } from 'react'
import Login from './pages/Login'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { CartProvider, useCart } from './contexts/CartContext'
import './App.css'
import { Navbar } from './components/Navbar'
import { NavLink, Route, Routes, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './store/slices/authSlice'

function App() {
  const auth = useSelector(state => state.auth)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login")
  }
  const handleLogin = () => {
    navigate("/login");
  }
  return (
    // <Navbar />
    <>
      <nav className='flex p-4 justify-center gap-5'>
        {auth.email ? (<button onClick={handleLogout}>Logout</button>) : (<button onClick={handleLogin}>Login</button>)}
        <NavLink to="/cart" className={"border p-1"} >Cart {cart.items.length} </NavLink>
        <NavLink to="/">Products</NavLink>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
