import React, { useContext, Fragment } from "react";
import "../../App.css";
import { DataContext } from "../../context/data/dataContext";
import SuggestionsHeader from "./SuggestionsHeader";
import arrowUp from "../../shared/icon-arrow-up.svg";
import SuggestionModal from "../Modals/SuggestionModal";
import ErrorModal from "../Modals/NoFeedbackModal";
import classes from "./Suggestions.module.css";
const Suggestions = () => {
  const dataContext = useContext(DataContext);
  const {
    products,
    incrementUpvote,
    Filter,
    comments,
    setActiveComment,
    deleteFeedback
  } = dataContext;
  const comIndex = comments.findIndex(comment => comment)
  
  console.log(comments[0])
  const suggestionObj = products.filter(
    (product, index) => product.status === "suggestion"
    );
    if (Filter === "MostUp") {
      suggestionObj.sort((a, b) => a.upvotes - b.upvotes);
    } else if (Filter === "MostDown") {
      suggestionObj.sort((a, b) => b.upvotes - a.upvotes);
    } else if (Filter === "MostComments") {
       suggestionObj.sort((a, b) => a.comments.length - b.comments.length);
    } else if (Filter === "LeastComments") {
      suggestionObj.sort((a, b) => b.comments.length - a.comments.length);
    }
  const suggestions = suggestionObj.filter((feedback, index) => {
    if (Filter === "") {
      return feedback;
    } else if (
      feedback.category.toLocaleLowerCase().includes(Filter.toLocaleLowerCase())
    ) {
      return feedback;
    } else if (Filter === "All" && feedback.category !== "") {
      return feedback;
    } 
  }).map((feedback, index) => {
                    
    const { id, title, category, description, upvotes } = feedback;
    return (
      <div key={products.id} className={classes.suggestion}>
        <div className={classes.suggestionBody}>
          <div className={classes.suggestionupvotes}>
            <div>
              <button
                className={classes.upvotebutton}
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  incrementUpvote(id,index);
                }}
              >
                <img
                  style={{ marginBottom: "35px" }}
                  className={classes.arrowUp}
                  src={arrowUp}
                  alt="comment icon"
                />
                <div className={classes.upvotes}>{upvotes}</div>
              </button>
            </div>
          </div>
          <div>
            <h1 className={classes.title}>{title}</h1>
            <p>{description}</p>
            <p>{category}</p>
          </div>
        </div>
       <button onClick={() => setActiveComment(id,index)}>
          <SuggestionModal id={id} index={index} />
       </button>
        <button onClick={() => deleteFeedback(id)}>delete </button>
      </div>
    );
  });

  return (
    <div className={classes.Suggestions}>
      <SuggestionsHeader suggestions={suggestions} />
      <div className={classes.sug}>
        <div>{suggestions.length === 0 ? <ErrorModal /> : suggestions}</div>
      </div>
    </div>
  );
};

export default Suggestions;
