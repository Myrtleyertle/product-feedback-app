import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-sec1">
        <h1>FrontEnd Mentor</h1>
        <h3>FeedbackBoard</h3>
      </div>
      <div className="nav-sec2">
          <span>
        <button>All</button>
        <button>UI</button>
        <button>UX</button>
        <button>Enchancement</button>
        <button>Bug</button>
        <button>Feature</button>

          </span>
      </div>
      <div className="nav-sec3">
        <div>
          <h2>Roadmap</h2>
          <Link to="view">View</Link>
        </div>
        <div>
          <span>Planned</span>
          <span>InProgress</span>
          <span>Live</span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
