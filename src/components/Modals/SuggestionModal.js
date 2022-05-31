import React, { useState, useContext, useEffect, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import classes from "../Suggestions/Suggestions.module.css";
import { DataContext } from "../../context/data/dataContext";
import commentIcon from "../../shared/icon-comments.svg";
import arrowUp from "../../shared/icon-arrow-up.svg";
import leftArrow from "../../shared/icon-arrow-left.svg";
import { Reply } from "../Reply";
const SuggestionModal = ({ index, setShowSuggestion, showSuggestion }) => {
  const dataContext = useContext(DataContext);
  const {
    newFeedback,
    products,
    comments,
    updateData,
    incrementUpvote,
    addComment,
    newComment,
    setActiveComment,
    activeComment,
    replies,
    addReply,
    newReply,
    getData,
  } = dataContext;
  const descriptionRef = useRef();
  const replyform = useRef();
  const [maxRemaining, setMaxRemaining] = useState(250);
  const [max, setMax] = useState(250);
  const remainingCharacterCount = () => {
    setMaxRemaining(max - descriptionRef.current.value.length);
  };
  const id = products[index].id;
  
  const [content, setContent] = useState("");
  const feedback = products;
  const [show, setShow] = useState(false);
 
  return (
    <div>
      <div
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "#0066ff",
          fontSize: "1rem",
          margin: "0 5px",
          padding: "5px",
        }}
        onClick={() => {
          setActiveComment(comments, index);
          setShow(!show);
        }}
      >
        <div>
          <img
            style={{ margin: "0 5px", backgroundColor: "transparent" }}
            src={commentIcon}
          />
          {comments[index] && comments[index].length > 0
            ? comments[index].length
            : 0}
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(!show)}>
        <Modal.Body style={{ width: "50vw", backgroundColor: "white" }}>
          <div>
            <div className="comments-header">
              <button
                onClick={() => {
                  setShow(!show);
                }}
                style={{
                  float: "right",
                  padding: "10px",
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <img src={leftArrow} /> Go back
              </button>
              <Button variant="outline-info">edit feedback</Button>
            </div>
            <div>
              <div key={id} className={classes.suggestion}>
                <div className={classes.suggestionBody}>
                  <div className={classes.suggestionupvotes}>
                    <div>
                      <img
                        onClick={() => {
                          incrementUpvote(index);
                          updateData(index, feedback);
                        }}
                        className={classes.arrowUp}
                        style={{
                          backgroundColor: "transparent",
                          top: "-20px",
                        }}
                        src={arrowUp}
                        alt="comment icon"
                      />
                    </div>
                    <div className={classes.upvotes}>
                      {products[index].upvotes}
                    </div>
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
              <div>
                {comments[index] && comments[index].length > 0
                  ? comments[index].length
                  : null}{" "}
                Comments:
                <br />
                {comments[index] && comments[index].length > 0 ? (
                  
                  comments[index].map((comment) => (
                    <div className={classes.comments} key={comment.id}>
                      <div className={classes.user}>
                        <div style={{ display: "flex" }}>
                          <img
                            src={comment.user.image}
                            className={classes.userimage}
                            alt="comment icon"
                          />
                          <div>
                            <div>{comment.user.name}</div>
                            <div>@{comment.user.username}</div>
                          </div>
                        </div>

                        <div>
                          <Button 
                            variant=""
                            onClick={() => {
                              comment.active = !comment.active;
                              
                            }}
                          >
                            Reply
                          </Button>
                        </div>
                      </div>
                      <div className={classes.comment}>{comment.content}</div>
                      <div>
                        {comment.active ? (
                          <Form >
                            <Form.Group
                            style={{width: '100%', height: '100px', margin: '0 auto',resize: 'none'}}
                              ref={replyform}
                              onChange={() => {
                                newReply.content = replyform.current.value;
                                setContent(newReply.content);
                                console.log(newReply.content);
                              }}
                              as="textarea"
                              maxLength="250"
                              rows={3}
                            />
                            <button
                              className={classes.replyButton}
                              onClick={() => {
                                addReply(id, content, comment, comment.user.username);
                              }}
                            >
                              Reply
                            </button>
                          </Form>
                        ) : console.log(comment.active)}
                      </div>
                      <div>
                       <Reply comment={comment} index={index} id={id}/>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No comments yet</div>
                )}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2>Add Comment</h2>
              <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group
                  ref={descriptionRef}
                  className="textarea"
                  style={{ resize: "none", height: "150px", width: "100%" }}
                  onChange={() => {
                    remainingCharacterCount();

                    newComment.content = descriptionRef.current.value;
                    setContent(newComment.content);
                  }}
                  as="textarea"
                  maxLength="250"
                  rows={3}
                />
                <div>{maxRemaining} characters remaining</div>
              </Form>
            </div>
            <Button
              variant="outline-info"
              onClick={() => {
                console.log(index);
                addComment(index, content);
              }}
            >
              add comment
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SuggestionModal;
