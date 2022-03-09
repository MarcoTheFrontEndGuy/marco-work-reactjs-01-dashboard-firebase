import React from 'react'
import { FaSearch, FaBell, FaAngleDown } from "react-icons/fa";
import './MainTopBar.css'
import women from '../img/women.jpg'

function MainTopBar() {
  return (
    <div className="mainTopBar">
       <form className="mainTopBar__formSearch">
          <label className="mainTopBar__formSearch__label">
            <i><FaSearch /></i>
            <input className="mainTopBar__formSearch__input" type="text" placeholder="Search items, collections"/>
          </label>
       </form>

       <div className="userProfileBar">

          <div className="userProfileBar__notificationBell--wrapper">
            <FaBell className="userProfileBar__notificationBell"/> 
          </div> 
          <div className="userProfile__userImage-container">
            <img className="userProfileBar__userImage" src={women} alt="logged in user image" />
          </div>
          <p className="userProfileBar__userName">Olivia Christine</p>
          <div className="userProfileBar__menu-icon">
            <FaAngleDown className="FaAngleDown-icon"/>
          
          </div>

      </div>
    </div>
  )
}

export default MainTopBar