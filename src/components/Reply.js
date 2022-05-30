import React, { Fragment, useContext, useRef, useState } from 'react'
import { DataContext} from '../context/data/dataContext'
import classes from '../components/Suggestions/Suggestions.module.css'
import { Modal, Button, Form } from "react-bootstrap";
export const Reply = ({comment, index, id }) => {
    const dataContext = useContext(DataContext)
    const {
        comments,
        addReply,
        newReply,
        products,
    } = dataContext
    
  const descriptionRef = useRef();
  const replyform = useRef();
  const [content, setContent] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);
    return (
        <Fragment>
            <div>
            {comment.replies ? (
                          <div>
                            {comment.replies.map((reply) => (
                              <div className={classes.reply} key={reply.id}>
                                <div className={classes.user}>
                                  <div>
                                    <img
                                      src={reply.user.image}
                                      className={classes.userimage}
                                      alt="comment icon"
                                    />
                                  </div>
                                  <div>
                                    <div>
                                      <div>{reply.user.name}</div>
                                      <div>@{reply.user.username}</div>
                                    </div>
                                    <div>
                                      <strong style={{ color: "#AD1FEA" }}>
                                        {" "}
                                        @{reply.replyingTo}
                                      </strong>
                                      {""} {reply.content}
                                    </div>
                                    {reply.active ? (
                                      <Form>
                                        <Form.Group
                                          ref={replyform}
                                          onChange={() => {
                                            newReply.content =
                                              replyform.current.value;
                                              newReply.replyTo = reply.user.username;
                                            setContent(newReply.content);
                                            console.log(newReply.content);
                                          }}
                                          as="textarea"
                                          maxLength="250"
                                          rows={3}
                                        />
                                        <Button
                                          onClick={() => {
                                            addReply(id, content, comment, reply.user.username);
                                          }}
                                        >
                                          Reply
                                        </Button>
                                      </Form>
                                    ) : null}
                                  </div>
                                </div>
                                <div>
                                  <Button variant='' onClick={() => {
                                    reply.active = !reply.active;
                                  }}>Reply</Button>
                                </div>
                              </div>
                            ))}
            </div>
            ) : null}
            </div>
        </Fragment>
    )
}