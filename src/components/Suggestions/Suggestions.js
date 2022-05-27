import React, { useContext, Fragment } from "react";
import "../../App.css";
import { DataContext } from "../../context/data/dataContext";
import SuggestionsHeader from "./SuggestionsHeader";
import arrowUp from "../../shared/icon-arrow-up.svg";
import SuggestionModal from "../Modals/SuggestionModal";
import ErrorModal from "../../components/Modals/NoFeedbackModal";
import classes from "./Suggestions.module.css";
const Suggestions = () => {
  const dataContext = useContext(DataContext);
  const {
    products,
    incrementUpvote,
    updateData,
    addFeedback,
    Filter,
    comments,
    setActiveComment,
    activeComment,
  } = dataContext;
  const suggestionObj = products.filter(
    (product, index) => product.status === "suggestion"
  );
  const filteredSuggestions = suggestionObj.filter((feedback, index) => {
    if (Filter === "") {
      return feedback;
    } else if (
      feedback.category.toLocaleLowerCase().includes(Filter.toLocaleLowerCase())
    ) {
      return feedback;
    } else if (Filter === "All" && feedback.category !== "") {
      return feedback;
    } else if (Filter === "MostUp") {
      products.sort((a, b) => a.upvotes - b.upvotes);
      return feedback;
    } else if (Filter === "MostDown") {
      products.sort((a, b) => b.upvotes - a.upvotes);
      return feedback;
    } else if (Filter === "MostComments") {
      products.sort((a, b) => b.comments[index] - a.comments[index]);
      return feedback;
    } else if (Filter === "LeastComments") {
      products.sort((a, b) => a.comments[index] - b.comments[index]);
      return feedback;
    }
  });
  
  const suggestions = filteredSuggestions.map((feedback, index) => {
   
    const { id, title, category, description, upvotes } = feedback;
    return (
      <div key={id} className={classes.suggestion}>
        <div className={classes.suggestionBody}>
          <div className={classes.suggestionupvotes}>
            <div>
              <button
                className={classes.upvotebutton}
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  incrementUpvote(id);
                  updateData(id, feedback);
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
        <button
          onClick={() => setActiveComment(comments,index)}
          style={{ border: "none", backgroundColor: "transparent" }}
        >
          <SuggestionModal id={id} index={index} />
        </button>
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
