import React from 'react'
import MainCards_Card from './MainCards_Card'
import MainCards_FiltersNavbar from './MainCards_FiltersNavbar'
import card1 from '../img/card1.jpg'
import card2 from '../img/card2.jpg'
import card3 from '../img/card3.jpg'
import card4 from '../img/card4.jpg'
import card5 from '../img/card5.jpg'
import card6 from '../img/card6.jpg'
import './MainCards.css'

function MainCards() {
  return (
    <div className="MainCards_Container">
      <MainCards_FiltersNavbar />
      
      <div className="cardsContainer">
       <MainCards_Card imgSrc={card1} title="Cubic Thunder" heart="65"/>
       <MainCards_Card imgSrc={card2} title="Pokemon Ball" heart="65"/>
       <MainCards_Card imgSrc={card3} title="Pyramid God" heart="65"/>
       <MainCards_Card imgSrc={card4} title="Stunning Cube" heart="65"/>
       <MainCards_Card imgSrc={card5} title="Start Crystal" heart="65"/>
       <MainCards_Card imgSrc={card6} title="Crystal Bird" heart="65"/>
     

      </div>
    </div>
  )
}

export default MainCards