import React, { useContext, Fragment } from "react";
import "../../App.css";
import { DataContext } from "../../context/data/dataContext";
import SuggestionsHeader from "./SuggestionsHeader";
import arrowUp from "../../images/icon-arrow-up.svg";
import SuggestionModal from "../../pages/Modals/SuggestionModal";
import ErrorModal from "../../pages/Modals/NoFeedbackModal";
import classes from "./Suggestions.module.css";
const Suggestions = () => {
  const dataContext = useContext(DataContext);
  const {
    products,
    incrementUpvote,
    Filter,   
    setActiveComment,
    deleteFeedback,
    updateProducts
  } = dataContext;
  
  console.log(products)
  const suggestionObj = products.filter(
    (product, index) => product.status === "suggestion"
    );
    const suggestions = products.filter((feedback, index) => {
      if (Filter === "") {
      return feedback;
    } else if (
      feedback.category.toLocaleLowerCase().includes(Filter.toLocaleLowerCase())
      ) {
        return feedback;
      } else if (Filter === "All" && feedback.category !== "") {
        return feedback;
      } 
      if (Filter === "MostUp") {
        products.sort((a, b) => a.upvotes - b.upvotes);
        return feedback;
      } else if (Filter === "MostDown") {
        products.sort((a, b) => b.upvotes - a.upvotes);
        return feedback;
      } else if (Filter === "MostComments") {
         products.sort((a, b) => a.commentsCount - b.commentsCount);
         return feedback;
      } else if (Filter === "LeastComments") {
        products.sort((a, b) => b.commentsCount - a.commentsCount);
        return feedback;
      }
  }).map((feedback, index) => {
                    
    const { id, title, category, description, upvotes } = feedback;
    return (
      <div key={index} className={classes.suggestion}>
        <div className={classes.suggestionBody}>
          <div className={classes.suggestionupvotes}>
            <div>
              <button
                className={classes.upvotebutton}
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  incrementUpvote('http://localhost:7000/products', id);
                  updateProducts()
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
        <button onClick={() => deleteFeedback(id)}> delete </button>
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
