import React, {Fragment, useContext} from 'react'
import { DataContext } from '../../context/data/dataContext';
import { Button } from 'react-bootstrap';
const FeedbackButton = () => {

  const dataContext = useContext(DataContext);
  const {addFeedback, newFeedback, flipShow  } = dataContext;
  return (
    <Fragment>
      <Button
    variant="primary"
    onClick={() => {
        flipShow();
        addFeedback(newFeedback);
    }}
  >
    Add Feedback
  </Button></Fragment>
  )
}

export default FeedbackButton