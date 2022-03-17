import React from 'react'
import './Aside.css'
import seller1 from '../img/seller1.jpg'
import seller2 from '../img/seller2.jpg'
import seller3 from '../img/seller3.jpg'
import seller4 from '../img/seller4.jpg'
import seller5 from '../img/seller5.jpg'
function Aside() {
  return (
    <aside>
       <section className="asideContainer statistics">
         <header className="asideContainer__header">
           <h3 className="asideContainer__header__h3">Statistics</h3>
           <a  className="asideContainer__header__a"href="#">View More</a>
         </header>
         <ul className="statistics__ul">
            <li className="statistics__ul__li">
              ArtWork Sold
              <span>187</span>
            </li>
            <li className="statistics__ul__li">
              ArtWork Cancelled
              <span>5</span>
            </li>
            <li className="statistics__ul__li">
              ArtWork Pending
              <span>25</span>
            </li>
            <li className="statistics__ul__li">
              ArtWork Delivered
              <span>200</span>
            </li>
            <li className="statistics__ul__li">
              Total Earnings
              <span>262 ETH</span>
            </li>
        
         </ul>
       </section>

       <section className="asideContainer topSellers">
         <header className="asideContainer__header">
           <h3 className="asideContainer__header__h3">Top Sellers</h3>
           <a  className="asideContainer__header__a "href="#">View More</a>
         </header>
         <ul className="topSellers__ul">
            <li className="topSellers__ul__li">
              <img src={seller1} alt="" />
              <p>
                Jane Cooper
                <span>@jane</span>
              </p>
              <a className="topSellers__ul__li__a-button" href="#">Follow</a>
            </li>

            <li className="topSellers__ul__li">
              <img src={seller2} alt="" />
              <p>
                Ariene McCoy
                <span>@ariene</span>
              </p>
              <a className="topSellers__ul__li__a-button" href="#">Follow</a>
            </li>
            <li className="topSellers__ul__li">
              <img src={seller3} alt="" />
              <p>
                Thersi Webb
                <span>@thersi</span>
              </p>
              <a className="topSellers__ul__li__a-button" href="#">Follow</a>
            </li>
            <li className="topSellers__ul__li">
              <img src={seller4} alt="" />
              <p>
                Kirsty Edwards
                <span>@kirsty</span>
              </p>
              <a className="topSellers__ul__li__a-button" href="#">Follow</a>
            </li>
            <li className="topSellers__ul__li">
              <img src={seller5} alt="" />
              <p>
                Ralph Wiggum
                <span>@ralph</span>
              </p> 
              <a className="topSellers__ul__li__a-button" href="#">Follow</a>
            </li>
        
         </ul>
       </section>

       <section className="asideContainer topSellers">
         <header className="asideContainer__header">
           <h3 className="asideContainer__header__h3">New Sellers</h3>
           <a  className="asideContainer__header__a "href="#">View More</a>
         </header>
         <ul className="topSellers__ul">
            <li className="topSellers__ul__li">
              <img src={seller1} alt="" />
              <p>
                Jane Cooper
                <span>@jane</span>
              </p>
              <a className="topSellers__ul__li__a-button" href="#">Follow</a>
            </li>

            <li className="topSellers__ul__li">
              <img src={seller2} alt="" />
              <p>
                Ariene McCoy
                <span>@ariene</span>
              </p>
              <a className="topSellers__ul__li__a-button" href="#">Follow</a>
            </li>
            <li className="topSellers__ul__li">
              <img src={seller3} alt="" />
              <p>
                Thersi Webb
                <span>@thersi</span>
              </p>
              <a className="topSellers__ul__li__a-button" href="#">Follow</a>
            </li>
            <li className="topSellers__ul__li">
              <img src={seller4} alt="" />
              <p>
                Kirsty Edwards
                <span>@kirsty</span>
              </p>
              <a className="topSellers__ul__li__a-button" href="#">Follow</a>
            </li>
            <li className="topSellers__ul__li">
              <img src={seller5} alt="" />
              <p>
                Ralph Wiggum
                <span>@ralph</span>
              </p> 
              <a className="topSellers__ul__li__a-button" href="#">Follow</a>
            </li>
        
         </ul>
       </section>
       
    </aside>
  )
}

export default Aside