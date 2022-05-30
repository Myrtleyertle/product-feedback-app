import React from "react";
import {DataContext} from "../../context/data/dataContext";
import { dataReducer } from "./dataReducer";
import {useReducer} from "react";
import data from "../../data.json";
import {
  ADD_FEEDBACK,
  GET_DATA,
  DELETE_FEEDBACK,
  INCREMENT,
  EDIT_FEEDBACK,
  UPDATE_DATA,
  SET_FILTER,
  FLIP_SHOW,
  ADD_COMMENT,
  SET_ACTIVE_REQUEST,
  ADD_REPLY,
} from "../types.js";
export const DataState = (props) => {
  const newFeedback = {
    title: "",
    description: "",
    status: "",
    category: "",
    upvotes: 0,
    id: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
  };
  const newReply = {
    content: "",
    id: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
    replyingTo: "",
    user: {},
  };

  const State = {
    products: [],
    activeComment: [],
    curUser: {},
    comments: [],
    Filter: "",
    show: false,
    target: null,
    newFeedback: newFeedback,
    newReply: newReply,
    id: data.productRequests.map((request) => request.id),
  };
  const [state, dispatch] = useReducer(dataReducer, State);

  const getData = () => {
    console.log("ran");
    if (
      sessionStorage.getItem("products") === null &&
      sessionStorage.getItem("curUser") === null && 
      sessionStorage.getItem("comments") === null
    ) {
      const data = require("../../data.json");
      
      sessionStorage.setItem(
        "products",
        JSON.stringify(data["productRequests"])
      );
      sessionStorage.setItem(
        "comments",
        JSON.stringify(
          data.productRequests.map((productRequest) => productRequest.comments)
        )
      );
      sessionStorage.setItem("curUser", JSON.stringify(data.currentUser));
    }
    const comments = JSON.parse(sessionStorage.getItem("comments"));
   //
    // set active to comments

    for (let i = 0; i < comments.length; i++) {
      if(comments[i] === undefined || comments[i] === null){
        comments[i] = [];
      } else {
        for (let j = 0; j < comments[i].length; j++) {
          comments[i][j]["active"] = false;
        }
      }
    }
    // set active to replies
    for (let i = 0; i < comments.length; i++) {
      if(comments[i] === undefined){
        comments[i] = [];
      } else {
        for (let j = 0; j < comments[i].length; j++) {
         if(comments[i][j].replies === undefined){
           comments[i][j].replies = [];
         } else {
          for (let k = 0; k < comments[i][j].replies.length; k++) {
            comments[i][j].replies[k]["active"] = false;
          }
         }
        }
      }
    }
    const curUser = JSON.parse(sessionStorage.getItem("curUser"));
    const products = JSON.parse(sessionStorage.getItem("products"));
    console.log(products)
    dispatch({
      type: GET_DATA,
      payload1: products,
      payload2: comments,
      payload3: curUser,
    });
  };
  const newComment = {
    content: "",
    id: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
    user: {
      image: state.curUser.image,
      name: state.curUser.name,
      username: state.curUser.username,
    },
    replies: [],
  };
  const addFeedback = (newFeedback) => {
    dispatch({ type: ADD_FEEDBACK, payload: newFeedback });
  };
  const increment= (id) => {
    dispatch({ type: INCREMENT, payload: id });
  };
  const editFeedback = () => {
    dispatch({ type: EDIT_FEEDBACK, payload: newFeedback });
  };
  const setFilter = (event) => {
    dispatch({ type: SET_FILTER, payload: event.target.value });
  };
  const deleteFeedback = (id) => {
    dispatch({ type: DELETE_FEEDBACK, payload: id });
  };

  const flipShow = () => {
    dispatch({ type: FLIP_SHOW });
  };
  const setActiveComment = (comments, index) => {
    dispatch({ type: SET_ACTIVE_REQUEST, payload: comments[index] });
  };

  const addReply = (id,curReply,comment,replyTo) => {
    
    const curComment = comment;
    const currentReplies = comment.replies ? curComment.replies : [];
    const newReply = {
      content: curReply,
      id: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
      replyingTo: replyTo,
      user: {
        image: state.curUser.image,
        name: state.curUser.name,
        username: state.curUser.username,
      },
    }
    currentReplies.push(newReply);
    curComment.replies = currentReplies;
    const newComments = [...state.comments, curComment];
    dispatch({ type: ADD_REPLY,  payload1: newComments });
  };
  const addComment = (index, content) => {
    const newComment = {
      content: content,
      id: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
      user: {
        image: state.curUser.image,
        name: state.curUser.name,
        username: state.curUser.username,
      },
      replies: [],
    };
    const newComments = state.comments[index].length === 0 ? state.comments[index].push(newComment) : state.comments[index] === undefined ? [...state.comments, newComment] : [...state.comments[index], newComment];

    dispatch({
      type: ADD_COMMENT,
      payload2: newComments,
    });
  };
  return (
    <DataContext.Provider
      value={{
        products: state.products,
        comments: state.comments,
        Filter: state.Filter,
        show: state.show,
        newFeedback: state.newFeedback,
        newComment: newComment,
        curUser: state.curUser,
        activeComment: state.activeComment,
        newReply: state.newReply,
        setFilter,
        getData,
        addFeedback,
        increment,
        editFeedback,
        deleteFeedback,
        flipShow,
        addComment,
        setActiveComment,
        addReply,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
