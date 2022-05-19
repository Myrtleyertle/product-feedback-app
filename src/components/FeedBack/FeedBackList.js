import React, { useContext } from "react";
import { Link } from "react-router-dom";
import commentIcon from "../../shared/icon-comments.svg";
import Thumbsup from "../../shared/thumb_up_black_24dp.svg";
import "../../App.css";
import { State } from "../../context/data/Context";
const FeedBackList = ({ feedbackState, filter, incrementUpvote }) => {
  return (
    <div className="ui segment">
      <div className="feedback">
        <div>
          {feedbackState.productRequests
            .filter((feedback) => {
              if (filter === "") {
                return feedback;
              } else if (
                feedback.category
                  .toLocaleLowerCase()
                  .includes(filter.toLocaleLowerCase())
              ) {
                return feedback;
              }
              if (filter === "upvotes") {
                feedback.upvotes.sort((a, b) => a - b);
              }
            })
            .map((feedbacks, index) => {
              const { id, title, category, description, status, upvotes } =
                feedbacks;
              return (
                <div
                  key={id}
                  className="feedbackcard"
                  style={{ width: "180%" }}
                >
                  <div>
                    <span className="feedback-upvotes ">{upvotes}</span>
                    <button
                      onClick={() => {
                        incrementUpvote(id);
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
                      <Link key={id} to="/Comment">
                        <img src={commentIcon} />
                      </Link>
                      <p></p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FeedBackList;
