import React from "react";
import { DataContext } from "./dataContext";
import { dataReducer } from "./dataReducer";
import {
  ADD_FEEDBACK,
  GET_DATA,
  DELETE_FEEDBACK,
  UPVOTE_INCREMENT,
  EDIT_FEEDBACK,
  UPDATE_DATA,
  HANDLE_CLICK,
  SET_FILTER,
  SELECT_FEEDBACK,
} from "../types";
export const DataState = (props) => {
  const newFeedback = {
    title: "",
    description: "",
    status: "",
    category: "",
    upvotes: 0,
    id: Math.floor(Math.random() * (100000 - 1 + 1)) + 1,
  };
  const initailState = {
    products: [],
    activeRquest: {},
    comments: [],
    Filter: "",
    show: false,
    target: null,
    newFeedback: newFeedback,
  };

  const [state, dispatch] = React.useReducer(dataReducer, initailState);

  const getData = () => {
    console.log("ran");
    sessionStorage.clear();
    if (
      sessionStorage.getItem("products") === null &&
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
    }
    const products = JSON.parse(sessionStorage.getItem("products"));
    const comments = JSON.parse(sessionStorage.getItem("comments"));
    console.log(products);
    dispatch({
      type: GET_DATA,
      payload1: products,
      payload2: comments,
    });
  };
  const addFeedback = (newFeedback) => {
    localStorage.setItem("feedback", JSON.stringify(newFeedback));
    dispatch({ type: ADD_FEEDBACK, payload: newFeedback });
  };
  const incrementUpvote = (id) => {
    dispatch({ type: UPVOTE_INCREMENT, payload: id });
  };
  const editFeedback = () => {
    dispatch({ type: EDIT_FEEDBACK, payload: newFeedback });
  };
  const updateData = (id) => {
    dispatch({ type: UPDATE_DATA, payload1: id, payload2: state.products });
  };
  const handleClick = (event) => {
    dispatch({ type: HANDLE_CLICK, payload: event.target.id });
  };
  const setFilter = (event) => {
    dispatch({ type: SET_FILTER, payload: event.target.value });
  };
  const deleteFeedback = (id) => {
    dispatch({ type: DELETE_FEEDBACK, payload: id });
  };
  const selectFeedback = (id,index) => {
    dispatch({ type: SELECT_FEEDBACK, payload1: id, payload2: state.products[index] });
  };

  return (
    <DataContext.Provider
      value={{
        products: state.products,
        comments: state.comments,
        Filter: state.Filter,
        show: state.show,
        target: state.target,
        newFeedback: state.newFeedback,
        setFilter,
        handleClick,
        getData,
        addFeedback,
        incrementUpvote,
        editFeedback,
        updateData,
        deleteFeedback,
        selectFeedback,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
