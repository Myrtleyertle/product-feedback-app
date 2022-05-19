import React from 'react'
import MobileNavbar from './MobileNavbar'
import Suggestion from '../Suggestions/Suggestions'
const Mobileview = () => {
  return (
    <div className="App ui segment">
      <MobileNavbar />
      <div>
        <Suggestion className="" />
      </div>
    </div>
  )
}

export default Mobileview