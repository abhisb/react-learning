import { ACTION_TYPES } from "../actions/counter-actions";

// reducers/counterReducer.js
const initialState = {
  count: 0,
  userDetails: {
    firstName: "",
    lastName: "",
  },
  studentList: [],
};

// [{
//   studentId: 'studentId',
//   firstName: ''
//   lastName: '',
//   age: '',
//   CGPA: '',
//   email: '',
// }]

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return {
        ...state,
        count: +state.count + +action.payload,
      };
    case ACTION_TYPES.DECREMENT:
      return { ...state, count: +state.count - +action.payload };
    case ACTION_TYPES.UPDATE_USER_NAME:
      return {
        ...state,
        userDetails: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
        },
      };
    // case "ADD_STUDENT":
    //   return {
    //     ...state,
    //     studentList: [...state.studentList, action.payload],
    //   };
    // case "DELETE_STUDENT":
    //   return {
    //     ...state,
    //     studentList: state.studentList.filter(
    //       (item) => item.studentId !== action.payload.studentId
    //     ),
    //   };
    default:
      return state;
  }
};

export default counterReducer;
