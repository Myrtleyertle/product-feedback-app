import "./App.css";
import React, { useEffect, useContext } from "react";
import Home from "./components/home/Home";
import Mobileview from "./components/mobile/Mobileview";
function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);
  console.log(width);
  
  return (
    <React.Fragment>
        <div className="ui container">
          {width > 450 ? <Home /> : null}
          {width <= 450 ? <Mobileview /> : null}
        </div>
    </React.Fragment>
  );
}

export default App;
