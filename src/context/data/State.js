import data from "../../data.json";

export const productRequest = data.productRequests;
export const newFeedback = {
  title: "",
  description: "",
  status: "",
  category: "",
  upvotes: 0,
  id: Math.floor(Math.random() * (100000 - 1 + 1)) + 1,
};
export const feedbackReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FEEDBACK":
      console.log("working");
      return {
        ...state,
        productRequests: [...state.productRequests, action.payload],
      };
    case "DELETE_FEEDBACK":
      return {
        ...state,
        productRequests: state.productRequests.filter(
          (productRequest) => productRequest.id !== action.payload
        ),
      };
    case "UPVOTE_INCREMENT":
      return {
        ...state,
        productRequests: state.productRequests.map((productRequest) =>
          productRequest.id === action.payload
            ? { ...productRequest, upvotes: productRequest.upvotes + 1 }
            : productRequest
        ),
      };
    case "EDIT_FEEDBACK":
      return {
        ...state,
        productRequests: state.productRequests.map((productRequest) =>
          productRequest.id === action.payload.id
            ? {
                ...productRequest,
                ...action.payload,
              }
            : productRequest
        ),
      }; 
    default:
      return state;
  }
};
