import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { DataContext } from "../../context/data/dataContext";
const AddFeedbackModal = () => {
  const dataContext = useContext(DataContext);
  const { newFeedback, addNewFeedback, flipShow, show } = dataContext;
  const descriptionRef = React.useRef();
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [maxRemaining, setMaxRemaining] = useState(250);
  const [max, setMax] = useState(250);
  const remainingCharacterCount = () => {
    setMaxRemaining(max - descriptionRef.current.value.length);
  };
  return (
    <React.Fragment>
      <Button style={{ backgroundColor: "#AD1FEA" }} onClick={() => flipShow()}>
        + Add Feedback
      </Button>

      <Modal show={show} onHide={() => flipShow()}>
        <Modal.Header closeButton>
          <Modal.Title>Create new Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => {
            e.preventDefault();
          }}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              placeholder="Add a Dark Theme"
              onChange={(e) => {
                setTitle(e.target.value);
                newFeedback.title = e.target.value
              }}
            />
            <label htmlFor="category">category</label>
            <select
              id="category"
              style={{ padding: "15px 10px", width: "100%", border: "none" }}
              onChange={(e) => newFeedback.category = e.target.value}
            >
              <option value="Feature">Feature</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="enhancement">Enhancement</option>
              <option value="bug">Bug</option>
            </select>

            <label htmlFor="description">Description</label>
            <input
              id="description"
              ref={descriptionRef}
              className="textarea"
              value={description}
              style={{ resize: "none", height: "150px" }}
              onChange={(e) => {
                remainingCharacterCount();
                setDescription(e.target.value);
                newFeedback.description = description;
              }}
              as="textarea"
              maxLength="250"
              rows={3}
            />
            <span>{maxRemaining} characters remaining</span>
          <Button variant="secondary" onClick={() => flipShow()}>
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              addNewFeedback(newFeedback);
              flipShow();
            }}
          >
            Add Feedback
          </Button>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default AddFeedbackModal;
