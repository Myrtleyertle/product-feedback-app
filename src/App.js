
import "./App.css";
import React, { useEffect } from "react";
import Desktopview from "./Views/Desktopview";
import Mobileview from "./Views/Mobileview";
import { State }from "./context/data/Context";
import { productRequest } from "./context/data/State";
function App() {
 
 const [width, setWidth] = React.useState(window.innerWidth);
 useEffect(()=>{ 
   window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    }
    );
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      }
      );
    }
  }, []);
 console.log(width); 
  return (
    <React.Fragment>
      <State.Provider value={productRequest}>
      <div className="ui container">
     {width > 450 ?  <Desktopview /> : null}
      {width <= 450 ? <Mobileview/> : null}
      </div>
      </State.Provider>
    </React.Fragment>
  );
}

export default App;
