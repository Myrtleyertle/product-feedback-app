import React from "react";
import MobileNavbar from "./MobileNavbar";
import MobileSuggestions from "./MobileSuggestions";
import classes from './Mobileview.module.css'
const Mobileview = () => {
  return (
    <div className="App">
      <MobileNavbar />
      <MobileSuggestions className="" />
    </div>
  );
};

export default Mobileview;
