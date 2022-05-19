
import {
  ADD_FEEDBACK,
  DELETE_FEEDBACK,
  UPVOTE_INCREMENT,
  EDIT_FEEDBACK,
  GET_DATA,
  UPDATE_DATA,
  HANDLE_CLICK,
  SET_FILTER,
  SELECT_FEEDBACK,
} from '../types';



export const dataReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        products: action.payload1,
        comments: action.payload2,
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
    case UPVOTE_INCREMENT:
      return {
        ...state,
        products: state.products.map((request) =>
          request.id === action.payload
            ? { ...request, upvotes: request.upvotes + 1 }
            : request
        ),
      };
    case UPDATE_DATA:
      sessionStorage.clear();
      return {
        ...state,
        products: state.products.map((request) =>
          request.id === action.payload1.id
            ? sessionStorage.setItem("products",JSON.stringify({...request }))
            : request
        ),
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
    case HANDLE_CLICK:
      return {
        ...state,
        show: !state.show,
        target: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        Filter: action.payload,
      };
      case SELECT_FEEDBACK:
      return {
        ...state,
        activeRequest: state.product.map((request, index) =>{
          return request.id === action.payload1 ? {...action.payload2} : request;
        }),
      };
      
    default:
      return state;
  }
};