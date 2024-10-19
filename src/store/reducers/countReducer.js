// reducers/counterReducer.js
const initialState = {
  count: 0,
  userDetails: {
    firstName: "John",
    lastName: "Doe",
  },
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: +state.count + +action.payload,
      };
    case "DECREMENT":
      return { ...state, count: +state.count - +action.payload };
    default:
      return state;
  }
};

export default counterReducer;
