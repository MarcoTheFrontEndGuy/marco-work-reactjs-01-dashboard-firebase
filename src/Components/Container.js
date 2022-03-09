import React from 'react'
import './Container.css'
import Aside from './Aside'
import Main from './Main'

function Container() {
  return (
    <div className="container">
       <Main />
       <Aside />
    </div>
  )
}

export default Container