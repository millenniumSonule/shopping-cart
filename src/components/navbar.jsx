import React, { useEffect, useState } from 'react'
import logo from './Assets/fake-logo.png'
import cart from './Assets/cart.png'
import './navbar.css'
import { Link } from 'react-router-dom';
import { useSelector} from "react-redux";

const Navbar = () => {
  const cart_json = useSelector((c) => c.cart) 
  const cartSize = cart_json.length;


  return (
    <div className="nav-bar">
      <div className="logo-navbar">
        <img src={logo} alt="Logo" />
        <div className='nav-texts'><Link to="/">Products</Link></div>
      </div>

      <div className='nav-texts '>
        <Link className=' adjust-cart' to="/cart"><img className='cart-logo' src={cart} alt="Logo" />
        </Link>
        <div className='total-cart'>
          {cartSize}
        </div>
      </div>

    </div>
  )
}

export default Navbar