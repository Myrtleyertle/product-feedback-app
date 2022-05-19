import React, { useContext, useState, useReducer } from "react";
import data from "../../data.json";
import FeedBackList from "./FeedBackList";
import FeedBackHeader from "./FeedBackHeader";
import { feedbackReducer } from "././../../context/data/State";
import { productRequest } from "../../context/data/State";
import { State } from "../../context/data/Context";
import { newFeedback } from "../../context/data/State";

const Feedback = () => {
  const [filter, setFilter] = useState("");
  const productRequest = useContext(State);
  const [feedbackState, dispatch] = useReducer(feedbackReducer, {
    upvotes: productRequest.map((upvotes) => upvotes.upvotes),
    productRequests: productRequest,
  });
  console.log(productRequest);
  function randomNumber() {
    return Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
  }
  function addFeedback(newFeedback) {
    localStorage.setItem("feedback", JSON.stringify(newFeedback));
    dispatch({ type: "ADD_FEEDBACK", payload: newFeedback });
  }
  function incrementUpvote(id) {
    dispatch({ type: "UPVOTE_INCREMENT", payload: id });
  }
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = React.useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  return (
    <div className="feedback-page">
      <FeedBackHeader
        show={show}
        feedback={dispatch}
        handleClick={handleClick}
        ref={ref}
        target={target}
        setShow={setShow}
        newFeedback={newFeedback}
        addFeedback={addFeedback}
        setFilter={setFilter}
      />
      <div>
        <FeedBackList
          filter={filter}
          feedbackState={feedbackState}
          incrementUpvote={incrementUpvote}
        />
      </div>
    </div>
  );
};
export default Feedback;
