import React from "react";
import { DataState } from "../../context/data/dataState";
const Comments = ({index}) => {
  const productRequest = React.useContext(DataState);
  return (
    <div>
     {productRequest[1].comments[0].content}
    </div>
  );
};

export default Comments;
