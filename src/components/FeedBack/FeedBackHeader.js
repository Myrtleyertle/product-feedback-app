import React from 'react'
import { Overlay } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Popover } from "react-bootstrap";
import Select from "../desktop/Select";
const FeedBackHeader = ({setFilter,handleClick,show,ref,target,newFeedback,addFeedback,setShow}) => {
  
  const titleRef = React.useRef();
  const descriptionRef = React.useRef();
  const statusRef = React.useRef();
  const categoryRef = React.useRef();
  
  return (
    <div className="feedback-header">
        <img />
        <h3 className="suggestions-info">
          <span></span>
          suggestions
        </h3>
        <Select setFilter={setFilter}/>
        <div ref={ref}>
          <Button variant="info" style={{margin:"10px"}} onClick={e => handleClick(e)}>Add Feedback</Button>
          <Overlay
            show={show}
            target={target}
            placement="bottom"
            container={ref}
            containerPadding={20}
          >
            <Popover id="popover-contained">
              <Popover.Header as="h3">Fill out info below</Popover.Header>
              <Popover.Body>
                <form>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      ref={titleRef}
                      onChange={() => {
                        newFeedback.title = titleRef.current.value;
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Description"
                      ref={descriptionRef}
                      onChange={() => {
                        newFeedback.description = descriptionRef.current.value;
                      }}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <select
                      className="form-control"
                      ref={statusRef}
                      onChange={() => {
                        newFeedback.status = statusRef.current.value;
                      }}
                    >
                      <option value="">Select</option>
                      <option value="feature">in progress</option>
                      <option value="bug">waiting</option>
                      <option value="enhancement">complete</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>category</label>
                    <select
                      className="form-control"
                      ref={categoryRef}
                      onChange={() => {
                        newFeedback.category = categoryRef.current.value;
                      }}
                    >
                      <option value="">Select</option>
                      <option value="feature">feature</option>
                      <option value="bug">bug</option>
                      <option value="enhancement">enhancement</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      addFeedback(newFeedback);
                      setShow(!show);
                    }}
                  >
                    Submit
                  </button>
                </form>
              </Popover.Body>
            </Popover>
          </Overlay>
        </div>
      </div >               
  )
}

export default FeedBackHeader