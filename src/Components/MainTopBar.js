import React from 'react'
import { FaSearch, FaBell, FaAngleDown } from "react-icons/fa";
import './MainTopBar.css'
import women from '../img/women.jpg'
import { useEffect } from 'react'

function MainTopBar() {

  useEffect( () => {

   const userProfileMenuToggle = document.querySelector(".FaAngleDown-icon");
   const userProfileBar__menu = document.querySelector(".userProfileBar__menu");

   function profileMenu_on_of() {
      if(userProfileBar__menu.style.right == "-10px") {
        userProfileMenuToggle.style.transform = "Rotate(0deg)";
        userProfileBar__menu.style.right = "-250px";
      }else {
        userProfileBar__menu.style.right = "-10px"; 
        userProfileMenuToggle.style.transform = "Rotate(180deg)";
      }
   }



   userProfileMenuToggle.addEventListener("click", profileMenu_on_of);



  },[]);

  return (
    <div className="mainTopBar">
      
       <form className="mainTopBar__formSearch">
            <i><FaSearch /></i>
            <input className="mainTopBar__formSearch__input" type="text" placeholder="Search items, collections"/>
       </form>



       <div className="userProfileBar">

          <div className="userProfileBar__notificationBell--wrapper">
            <FaBell className="userProfileBar__notificationBell"/> 
          </div> 
          <div className="userProfile__userImage-container">
            <img className="userProfileBar__userImage" src={women} alt="logged in user image" />
          </div>
          <p className="userProfileBar__userName">Olivia Christine</p>
         
          <div className="userProfileBar__menu-container">    
            <FaAngleDown className="FaAngleDown-icon"/>
            <ul className="userProfileBar__menu">             
              <li>Web Design</li>
              <li>UI/UX</li>
              <li>Form Design</li>
              <li>UI Design</li>
            </ul>
          
          </div>

      </div>
    </div>
  )
}

export default MainTopBar