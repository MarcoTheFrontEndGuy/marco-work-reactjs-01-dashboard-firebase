import React from 'react'
import './MainBanner.css'
import Banner from "../img/1.jpg";

function MainBanner() {
  return (
    <div className="mainBanner" style={{ 
      background:`url(${Banner})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: "cover"
    
    }}>
      <div className="mainBanner__content">
        <h1>Round Hall</h1>
        <h2>1.5 ETH</h2>
        <p>Uploaded by Alexander Vernof</p>
        <div className="mainBanner__bid">
          <button className="mainBanner__bid__button">BID NOW</button>
          <p className="mainBanner__bid__dateline">Ending In <span>2d:15h:20m</span></p>
        </div>
      </div>
    </div>
  )
}

export default MainBanner