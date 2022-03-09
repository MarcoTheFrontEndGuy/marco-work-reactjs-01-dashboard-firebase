import React from 'react'
import './Menu.css'
import logo from '../img/logo.png'

import {
   FaDelicious,
   FaShoppingCart,
   FaWallet,
   FaChartLine,
   FaRegClock,
   FaCog,
   FaSignOutAlt,
 } from "react-icons/fa";
 

function Menu() {
  return (
    <nav>
       <img src={logo} alt="" className="logo" />
       <ul>
          <li><Icon icon={<FaDelicious />} /> </li>
          <li><Icon icon={<FaShoppingCart />} /> </li>
          <li><Icon icon={<FaWallet />} /> </li>
          <li><Icon icon={<FaChartLine />} /> </li>
          <li><Icon icon={<FaRegClock />} /> </li>
          <li><Icon icon={<FaCog />} /> </li>
          <li><Icon icon={<FaSignOutAlt />} /> </li>
          
       </ul>
    </nav>
  )
}

function Icon({icon}) {
   return <a className="menu__icon" href="#">{icon}</a>
}

export default Menu