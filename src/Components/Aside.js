import React from 'react'
import './Aside.css'

function Aside() {
  return (
    <aside>
       <section className="asideContainer statistics">
         <header className="statistics__header">
           <h3 className="statistics__header__h3">Statistics</h3>
           <a  className="statistics__header__a"href="#">View More</a>
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
       <section className="asideContainer statistics">
         <header className="statistics__header">
           <h3 className="statistics__header__h3">Statistics</h3>
           <a  className="statistics__header__a"href="#">View More</a>
         </header>
         <ul className="statistics__ul">
            <li className="statistics__ul__li">
              <img src="" alt="" />
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
       <div className={`asideContainer topSellers`}>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error est ullam sunt tenetur accusamus esse ipsa. Blanditiis ex aperiam neque mollitia. Nesciunt rem consequuntur excepturi quidem ipsum? Iusto ad saepe itaque perferendis? Commodi, reprehenderit voluptatem illum optio vero harum voluptates.
       </div>
    </aside>
  )
}

export default Aside