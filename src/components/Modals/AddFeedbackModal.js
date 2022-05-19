import React,{ useState }from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
const AddFeedbackModal = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Feedback 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <select style={{padding: '15px 10px', width: '100%', border: 'none'}}>
                <option value="">Select Category</option>
                <option value="Feature">Feature</option>
                <option value="UI">UI</option>
                <option value="UX">UX</option>
                <option value="enhancement">Enhancement</option>
                <option value="bug">Bug</option>
            </select>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Feedback Detail</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Feedback
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddFeedbackModal