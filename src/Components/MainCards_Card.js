import React from 'react'
import { FaHeart } from "react-icons/fa";
import './MainCards_Card.css'


function MainCards_Card({imgSrc, title, heart}) {
  return (
    <div className="MainCards_Card">
       <img src={imgSrc} alt="main card photo space marco" />
       <h2>{title} <span><i><FaHeart /></i>{heart}</span></h2>

       <div className="bid">
         <p className="CurrentBid">Current Bid <span>1.2 ETH</span></p>
         <p className="EndingIn">Ending In <span>1d:12h:10m</span></p>
       </div>
       <div className="cardButtons">
         <a href="#" className={`button btn`}>PLACE A BID</a>
         <a href="#" className={`button2 btn`}>History</a>

       </div>
    </div>
  )
}

export default MainCards_Card