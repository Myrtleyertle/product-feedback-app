import React from "react";
import data from "../data.json";
export default function Feedback() {
    const [feedback, setFeedback] = React.useState(data);
    return (
    <div className="feedback">
    {feedback.productRequests.map((feedbacks) => {
      const { id, title, description, status, upvotes } = feedbacks;
      return (
        <div className="feedback-info" key={id}>
          <div>
            <h4>{upvotes}</h4>
          </div>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{feedback.category}</p>
            <p>{status}</p>
          </div>
          <div>
            <img />
            <p></p>
          </div>
        </div>
      );
    })}
  </div>)
}