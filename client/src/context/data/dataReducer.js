
import {
  ADD_FEEDBACK,
  DELETE_FEEDBACK,
 INCREMENT,
  EDIT_FEEDBACK,
  SET_FILTER,
  FLIP_SHOW,
  ADD_COMMENT,
  ADD_REPLY,
  SET_ACTIVE_COMMENT,
  SET_PRODUCTS,
  GET_USERS,
} from '../types.js';



export const dataReducer = (state, action) => {
  switch (action.type) {
      case GET_USERS: {
        return {
          ...state,
          curUser: action.payload
        }
      }
      case SET_PRODUCTS:
        return {
          ...state,
          products: action.payload,
          comments: action.payload1
        }
    case ADD_FEEDBACK:
      console.log(action.payload);
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
      case SET_ACTIVE_COMMENT:
        return {
          ...state,
          activeComments: action.payload
        }
    default:
      return state;
  }
}