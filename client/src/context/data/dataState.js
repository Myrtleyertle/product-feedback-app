import React from "react";
import { DataContext } from "./dataContext";
import { dataReducer } from "./dataReducer";
import { useReducer } from "react";
import {
  ADD_FEEDBACK,
  GET_DATA,
  DELETE_FEEDBACK,
  INCREMENT,
  EDIT_FEEDBACK,
  SET_FILTER,
  FLIP_SHOW,
  ADD_COMMENT,
  SET_ACTIVE_COMMENT,
  ADD_REPLY,
} from "../types.js";
const PRODUCTS_URL = "http://localhost:7000/products";
const USERS_URL = "http://localhost:7000/currentusers"
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
    activeComments: [],
    curUser: {},
    comments: [],
    Filter: "",
    show: false,
    newFeedback: newFeedback,
    newReply: newReply,
    id: null,
  };
  const [state, dispatch] = useReducer(dataReducer, State);


  async function fetchData() {
    const response = await fetch(PRODUCTS_URL)
    console.log(response)
    return response.json();
  }
  async function FetchUsers(){
    const users = await fetch(USERS_URL)
    return users.json();
  }
  const getData = async () => {
    const data = await fetchData();                 
    const parsedData = JSON.parse(data)
    console.log(parsedData)
    const products = parsedData
    const comments = parsedData.map((item) => item.comments)
    const curUsersData = await FetchUsers();
    const curUser =  curUsersData
                             
    for (let i = 0; i < comments.length; i++) {
      if (comments[i] === undefined || comments[i] === null) {
          comments[i] = [];
      } else {
          for (let j = 0; j < comments[i].length; j++) {
              comments[i][j]["active"] = false;
              if (comments[i][j].replies === undefined) {
                  comments[i][j].replies = [];
              } else {
                  for (let k = 0; k < comments[i][j].replies.length; k++) {
                      comments[i][j].replies[k]["active"] = false;
                  }
              }
          }
      
        }
             } 
    dispatch({
      type: GET_DATA,
      payload1: products,
      payload2: comments,
      payload3: curUser,
    });
  }


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
  // wokring kind of ( wont remain after reload)
  const addFeedback = (newFeedback) => {
    dispatch({ type: ADD_FEEDBACK, payload: newFeedback });
  };
  // working
  const incrementUpvote = (id, index) => {
    
    dispatch({ type: INCREMENT, payload: '2'});
  };
  // not working
  const editFeedback = () => {
    dispatch({ type: EDIT_FEEDBACK, payload: newFeedback });
  };
  // working
  const setFilter = (event) => {
    dispatch({ type: SET_FILTER, payload: event.target.value });
  };
  // functional but no styling
  const deleteFeedback = (id) => {
    dispatch({ type: DELETE_FEEDBACK, payload: id });
  };
  // probably could be moved to component level state
  const flipShow = () => {
    dispatch({ type: FLIP_SHOW });
  };
  // kinda useless right now
  const setActiveComment = (event, id) => {
    dispatch({ type: SET_ACTIVE_COMMENT, payload: id });
  };
  /// replies dont remain after reload of page
  const addReply = (id, curReply, comment, replyTo) => {
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
    };
    currentReplies.push(newReply);
    curComment.replies = currentReplies;
    const newComments = [...state.comments, curComment];
    dispatch({ type: ADD_REPLY, payload1: newComments });
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
    const newComments = [
      ...state.comments,
      state.comments[index].push(newComment),
    ];
    sessionStorage.setItem("comments", JSON.stringify(newComments));
    const updatedComments = JSON.parse(sessionStorage.getItem("comments"));
    dispatch({
      type: ADD_COMMENT,
      payload2: updatedComments,
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
        incrementUpvote,
        editFeedback,
        deleteFeedback,
        flipShow,
        addComment,
        addReply,
        setActiveComment,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
