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

       <section className="asideContainer topSeller">
         <header className="asideContainer__header">
           <h3 className="asideContainer__header__h3">Top Sellers</h3>
           <a  className="asideContainer__header__a"href="#">View More</a>
         </header>
         <ul className="topSeller__ul">
            <li className="topSeller__ul__li">
              <img src={seller1} alt="" />
              <p>
                ArtWork Sold
                <span>187</span>
              </p>
              <a href="#">Follow</a>
            </li>

            <li className="topSeller__ul__li">
              <img src={seller2} alt="" />
              <p>
                ArtWork Cancelled
                <span>5</span>
              </p>
              <a href="#">Follow</a>
            </li>
            <li className="topSeller__ul__li">
              <img src={seller3} alt="" />
              <p>
                ArtWork Pending
                <span>25</span>
              </p>
              <a href="#">Follow</a>
            </li>
            <li className="topSeller__ul__li">
              <img src={seller4} alt="" />
              <p>
                ArtWork Delivered
                <span>200</span>
              </p>
              <a href="#">Follow</a>
            </li>
            <li className="topSeller__ul__li">
              <img src={seller5} alt="" />
              <p>
                Total Earnings
                <span>262 ETH</span>
              </p> 
              <a href="#">Follow</a>
            </li>
        
         </ul>
       </section>
       <div className={`asideContainer topSellers`}>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error est ullam sunt tenetur accusamus esse ipsa. Blanditiis ex aperiam neque mollitia. Nesciunt rem consequuntur excepturi quidem ipsum? Iusto ad saepe itaque perferendis? Commodi, reprehenderit voluptatem illum optio vero harum voluptates.
       </div>
    </aside>
  )
}

export default Aside