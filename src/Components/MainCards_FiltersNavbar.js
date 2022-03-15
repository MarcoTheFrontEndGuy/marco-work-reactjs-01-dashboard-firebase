import React from 'react'
import './MainCards_FiltersNavbar.css'


function MainCards_FiltersNavbar() {
  return (
    <ul className="menu_UL_filters">
      <li className="menu_UL_filters__li"><a href="#" >Feed</a></li>
      <li className="menu_UL_filters__li"><a href="#" className="button2">Popular</a></li>
      <li className="menu_UL_filters__li"><a href="#" className="button">ALL</a></li>
      <li className="menu_UL_filters__li"><a href="#" className="button2">Illustration</a></li>
      <li className="menu_UL_filters__li"><a href="#" className="button2">Art</a></li>
      <li className="menu_UL_filters__li"><a href="#" className="button2">Games</a></li>
    </ul>
  )
}

export default MainCards_FiltersNavbar