import React from 'react'
import './MainBanner.css'

function MainBanner() {
  return (
    <div className="mainBanner">
      <div className="mainBanner__content">
       <h1>Round Hall</h1>
       <h2>1.5 ETH</h2>
       <p>Uploaded by Alexander Vernof</p>
       <div className="mainBanner__bid"></div>
       <button className="mainBanner__bid__button">BID NOW</button>
       <p className="mainBanner__bid__dateline">Ending In <span>2d:15h:20m</span></p>
      </div>
    </div>
  )
}

export default MainBanner