import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { DataContext } from "../../context/data/dataContext";
const AddFeedbackModal = () => {
  const dataContext = useContext(DataContext);
  const { newFeedback, addFeedback, flipShow, show } = dataContext;
  const titleRef = React.useRef();
  const descriptionRef = React.useRef();
  const statusRef = React.useRef();
  const categoryRef = React.useRef();
  const [maxRemaining, setMaxRemaining] = useState(250);
  const [max, setMax] = useState(250);
  const remainingCharacterCount = () => {
    setMaxRemaining(max -  descriptionRef.current.value.length);
  };
  return (
    <React.Fragment>
      <Button style={{backgroundColor: '#AD1FEA'}} onClick={() => flipShow()}>
       + Add Feedback
      </Button>

      <Modal show={show} onHide={() => flipShow()}>
        <Modal.Header closeButton>
          <Modal.Title>Create new Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add a Dark Theme"
                autoFocus
                ref={titleRef}
                onChange={() => {
                  newFeedback.title = titleRef.current.value;
                }}
              />
            </Form.Group>
            <select
            ref={categoryRef}
            onChange={() => {
              newFeedback.category = categoryRef.current.value;
            }}
              style={{ padding: "15px 10px", width: "100%", border: "none" }}
            >
              <option value="">Select Category</option>
              <option value="Feature">Feature</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="enhancement">Enhancement</option>
              <option value="bug">Bug</option>
            </select>
            <select
            ref={statusRef}
            onChange={() => {
              newFeedback.status = statusRef.current.value
            }}
              style={{ padding: "15px 10px", width: "100%", border: "none" }}
            >
              <option value="suggestion">suggestion</option>
            </select>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Feedback Detail</Form.Label>
              <Form.Control ref={descriptionRef}
                      className="textarea"
                      style={{ resize: "none", height: "150px"}}
                      onChange={() => {
                        remainingCharacterCount();
                        newFeedback.description = descriptionRef.current.value;
                      }} as="textarea" maxLength='250' rows={3} />
                      <span>{maxRemaining} characters remaining</span>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => flipShow()}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
                addFeedback(newFeedback);
              flipShow();
            }}
          >
            Add Feedback
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default AddFeedbackModal;
