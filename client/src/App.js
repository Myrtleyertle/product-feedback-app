import "./App.css";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import Mobileview from "./pages/mobile/Mobileview";
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
          {width > 450 ? <Home /> : null}
          {width <= 450 ? <Mobileview /> : null}
    </React.Fragment>
  );
}

export default App;
