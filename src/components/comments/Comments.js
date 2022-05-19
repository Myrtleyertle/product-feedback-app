import React from "react";
import { State } from "../../context/data/Context";
const Comments = () => {
  const productRequest = React.useContext(State);
  return (
    <div>
      {productRequest.map((comment, index) => {
        return <div>{comment.id}</div>;
      })}
    </div>
  );
};

export default Comments;
