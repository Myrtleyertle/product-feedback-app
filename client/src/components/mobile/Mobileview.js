import React, {useEffect, useContext} from "react";
import MobileNavbar from "./MobileNavbar";
import MobileSuggestions from "./MobileSuggestions";
import classes from './Mobileview.module.css'
import {DataContext} from '../../context/data/dataContext'
const Mobileview = () => {
  const {getData} = useContext(DataContext)
  useEffect(() =>{
    getData()
  }, [])
  return (
    <div className="App">
      <MobileNavbar />
      <MobileSuggestions className="" />
    </div>
  );
};

export default Mobileview;
