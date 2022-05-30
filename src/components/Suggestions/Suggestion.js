import React, { useContext } from "react";
import { Button} from "react-bootstrap";
import classes from "./Suggestions.module.css";
import { DataContext } from "../../context/data/dataContext";
import commentIcon from "../../shared/icon-comments.svg";
import arrowUp from "../../shared/icon-arrow-up.svg";
const Suggestion = ({ index, id, setShowSuggestion, showSuggestion }) => {
  const dataContext = useContext(DataContext);
  console.log(index);
  const {
    products,
    incrementUpvote,
    updateData,
    show,
    addFeedback,
    Filter,
    comments,
  } = dataContext;

  const feedback = products;
  return (
    <div className="ui ">
      <div className="ui ">
        <div className="comments-header">
            <button onClick={() => {
                setShowSuggestion(false);
            }}>Go back</button>
          <Button variant="outline-info">edit feedback</Button>
        </div>
        <div>
          <div key={0} className={classes.suggestion}>
            <div className={classes.suggestionBody}>
              <div className={classes.suggestionupvotes}>
                <div>
                  <img
                    onClick={() => {
                      incrementUpvote(index);
                      updateData(index, feedback);
                    }}
                    className={classes.arrowUp}
                    src={arrowUp}
                    alt="comment icon"
                  />
                </div>
                <div className={classes.upvotes}>{products[index].upvotes}</div>
              </div>
              <div>
                <div className={classes.title}>{products[index].title}</div>
                <div>{products[index].description}</div>
                <div>{products[index].category}</div>
              </div>
            </div>
            <div>
                <img style={{ margin: "0 5px" }} src={commentIcon} />
              {comments[index] && comments[index].length > 0
                ? comments[index].length
                : 0}
            </div>
          </div>
        </div>
        <div>
          <h2>Add Comment</h2>
          <form>
            <input
              type="text"
              placeholder="Comment"
              style={{
                width: "100%",
                height: "100px",
                border: "none",
                backgroundColor: "lightgrey ",
              }}
            />
          </form>
          <Button variant="outline-info">add comment</Button>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
