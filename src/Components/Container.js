import React from 'react'
import './Container.css'
import Aside from './Aside'
import Main from './Main'
import MainTopBar from './MainTopBar'

function Container() {
  return (
    <div className="container">
       <MainTopBar />
       <div className="container__content">
        <Main />
        <Aside />
       </div>
    </div>
  )
}

export default Container