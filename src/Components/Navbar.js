import React from 'react'
import {icon} from 'react-icon'

function Navbar() {
  return (
    <navbar>
       <img src="" alt="" className="logo" />
       <ul>
          <li>
             <Icon icon={<Fa} />
          </li>
          <li>
             <Icon icon={<Fa} />
          </li>
          <li>
             <Icon icon={<Fa} />
          </li>
          <li>
             <Icon icon={<Fa} />
          </li>
          <li>
             <Icon></Icon>
          </li>
          <li>
             <Icon></Icon>
          </li>
          <li>
             <Icon></Icon>
          </li>
       </ul>
    </navbar>
  )
}

const Icon = (icon) => {
   return   <a href="#">icon</a>
};

export default Navbar