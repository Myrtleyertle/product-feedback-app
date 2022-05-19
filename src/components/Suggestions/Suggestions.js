import React, { useContext, Fragment } from "react";
import "../../App.css";
import { DataContext } from "../../context/data/dataContext";
import SuggestionsHeader from "./SuggestionsHeader";
import { Link } from "react-router-dom";
import commentIcon from "../../shared/icon-comments.svg";
import Thumbsup from "../../shared/thumb_up_black_24dp.svg";
import Suggestion from "./Suggestion";
const Suggestions = () => {
  const dataContext = useContext(DataContext);
  const { products, incrementUpvote, updateData, show, addFeedback } = dataContext;

  const suggestionsObj = products.filter((feedback) => {
    return feedback;
  });
  const suggestions = suggestionsObj.map((feedback, index) => {
    const { id, title, category, description, status, upvotes } = feedback;
    return (
      <Fragment key={index}>
        <div key={id} className="feedbackcard" style={{ width: "180%" }}>
          <div>
            <span className="feedback-upvotes ">{upvotes}</span>
            <button
              onClick={() => {
                incrementUpvote(id);
                updateData(id, products);
              }}
            >
              <img src={Thumbsup} alt="comment icon" />
            </button>
          </div>
          <div
            className="d-block m-auto feedback-info ui card-body"
            style={{ width: "90%" }}
          >
            <h5>{title}</h5>
            <span>{description}</span>
            <span>{category}</span>
            <span>{status}</span>
            <div>
              <div>
                <img src={commentIcon} />
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  });
  const suggestion = () => {
      return (
        <Fragment>
          <Suggestion />
        </Fragment>
      )
  };
  return (
    <div className="">
      <SuggestionsHeader />
      <div className="feedback ui segment">{show ? suggestion : suggestions}</div>
    </div>
  );
};

export default Suggestions;
