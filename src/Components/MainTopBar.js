import React from 'react'
import { FaSearch, FaBell, FaAngleDown } from "react-icons/fa";
import './MainTopBar.css'
import women from '../img/women.jpg'
import { useEffect } from 'react'

function MainTopBar() {

  useEffect( () => {

   const userProfileMenuToggle = document.querySelector(".FaAngleDown-icon");
   const userProfileBar__menu = document.querySelector(".userProfileBar__menu-ul");
   
// #############################################################################
//  ----show/hide profile menu on click changing property right value 
// function profileMenu_on_of() {
//   if(userProfileBar__menu.style.right === "0px") {
//     userProfileMenuToggle.style.transform = "Rotate(0deg)";
//     userProfileBar__menu.style.right = "-200px";
//   }else {
//     userProfileBar__menu.style.right = "0px"; 
//     userProfileMenuToggle.style.transform = "Rotate(180deg)";
//   }
// }

// userProfileMenuToggle.addEventListener("click", profileMenu_on_of);
//  END ----show/hide profile menu on click changing property right value 
// #############################################################################


// #############################################################################
// SHOW PROFILE MENU WHEN MOUSE ENTER THE TOGGLE ICON 
// HIDE PROFILE MENU WHEN THE MOUSE LEAVE THE PROFILE MENU 

  function showProfileMenu() {
    // userProfileBar__menu.style.right = "0px";
    userProfileBar__menu.style.transform = "translateX(0px)";
    userProfileMenuToggle.style.transform = "rotate(180deg)";
    
  }
  
  userProfileMenuToggle.addEventListener("mouseenter", showProfileMenu)
  
  
  function hideProfileMenu() {
    // userProfileBar__menu.style.right = "-200px";
    userProfileBar__menu.style.transform = "translateX(300px)";
    userProfileMenuToggle.style.transform = "rotate(0deg)";
  }
  
  userProfileBar__menu.addEventListener("mouseleave", hideProfileMenu);

// #############################################################################






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

          <div className="userProfileBar__userImage-container">
            <img className="userProfileBar__userImage" src={women} alt="logged in user image" />
          </div>

          <p className="userProfileBar__userName">Olivia Christine</p>
         
          <FaAngleDown className="FaAngleDown-icon"/>
        
          <ul className="userProfileBar__menu-ul">             
            <li>Web Design</li>
            <li>UI/UX</li>
            <li>Form Design</li>
            <li>UI Design</li>
          </ul>            


      </div>
    </div>
  )
}

export default MainTopBar