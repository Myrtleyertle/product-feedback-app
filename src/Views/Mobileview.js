import React from 'react'
import MobileNavbar from '../components/mobile/MobileNavbar'
import Feedback from '../components/FeedBack/Feedback'
const Mobileview = () => {
  return (
    <div className="App ui segment">
      <MobileNavbar />
      <div>
        <Feedback className="" />
      </div>
    </div>
  )
}

export default Mobileview