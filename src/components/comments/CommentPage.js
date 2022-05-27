import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FeedbackSelected from './FeedbackSelected'
import Comments from './Comments.js.js'
const CommentPage = () => {
  return (
    <div className="ui container">
      <div className="ui segment">
        <div className="comments-header">
          <Link to="/">
            <button>Go back</button>
          </Link>
          <Button variant="outline-info">edit feedback</Button>
        </div>
        <div>
          <FeedbackSelected />
        </div>
        <div>
          <Comments />
        </div>
        <div>
          <h2>Add Comment</h2>
          <form>
            <input type="text" placeholder="Comment" style={{width: '100%', height: '100px', border: 'none', backgroundColor: 'lightgrey '}} />
          </form>
          <Button variant="outline-info">add comment</Button>
        </div>
      </div>
      
    </div>
  );
};

export default CommentPage;
 