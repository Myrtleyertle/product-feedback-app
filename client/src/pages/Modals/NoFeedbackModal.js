import React from "react";
import classes from "./ErrorModal.module.css";
import check from '../../images/dect.png';
import AddFeedbackButton from "./AddFeedbackButton";
const ErrorModal = () => {
  return (
    <div className={classes.ErrorModal}>
      <div>
        <img src={check} />
      </div>
      <div className={classes.ErrorBody}>
        <h3>There is no feedback yet.</h3>
        <div>
          <p>
            Got a Suggestion? Found a bug that needs to be squashed?
            <br/>
             We Love hearing about new ideas to improve our app.
          </p>
        </div>
      </div>
      <div>
        <AddFeedbackButton />
      </div>
    </div>
  );
};

export default ErrorModal;
