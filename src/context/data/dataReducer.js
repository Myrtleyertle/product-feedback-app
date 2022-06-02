
import {
  ADD_FEEDBACK,
  DELETE_FEEDBACK,
 INCREMENT,
  EDIT_FEEDBACK,
  GET_DATA,
  SET_FILTER,
  FLIP_SHOW,
  ADD_COMMENT,
  ADD_REPLY,
} from '../types.js';



export const dataReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        products: action.payload1,
        comments: action.payload2,
        curUser: action.payload3,
      };
    case ADD_FEEDBACK:
      console.log("working");
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_FEEDBACK:
      return {
        ...state,
        products: state.products.filter(
          (productRequest) => productRequest.id !== action.payload
        ),
      };
    case INCREMENT:
      return {
        ...state,
        products: action.payload,
      };
    case EDIT_FEEDBACK:
      return {
        ...state,
        products: state.products.map((productRequest) =>
          productRequest.id === action.payload.id
            ? {
                ...productRequest,
                ...action.payload,
              }
            : productRequest
        ),
      }; 
    case SET_FILTER:
      return {
        ...state,
        Filter: action.payload,
      };
      case FLIP_SHOW:
      return {
        ...state,
        show: !state.show,
      };
      case ADD_COMMENT:
        return {
        ...state,
        comments: [...state.comments, action.payload],
      };
      case ADD_REPLY:
      return {
        ...state,
        comments: action.payload1,
      };
    default:
      return state;
  }
}