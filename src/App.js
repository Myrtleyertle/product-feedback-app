import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import data from "./data.json";
import { useEffect } from "react";

function App(id) {
  const [feedback, SetFeedback] = React.useState(data);
  const [filter, SetFilter] = React.useState([]);
  const [Comments , SetComments] = React.useState([]);
  const url = data
 
    const comments = feedback.productRequests.map(item => {
      return item.comments;
    }
    );

  
  return (
    <div className="App">
      <Navbar className="navbar" />
      <div className="notification-feedback">
        <img />
        <h3>suggetions</h3>
        <div>
        <p>Sort By:</p>
        <select>
          <option>All</option>
          <option>UI</option>
          <option>UX</option>
          <option>Enchancement</option>
        </select>

        </div>
        <button>+ Add Feedback</button>
      </div>
      <div className="feedback">
        {feedback.productRequests.map((feedback) => {
          const { id, title, description, status, comments } = feedback;
          return (
            <div className="feedback-info" key={id}>
              <h4>{feedback.upvotes}</h4>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>{feedback.category}</p>
              <p>{status}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
