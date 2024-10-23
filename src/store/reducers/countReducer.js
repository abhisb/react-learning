// reducers/counterReducer.js

import { ADD_STUDENT, REMOVE_STUDENT, UPDATE_STUDENT} from "../actions/counter-actions";

const initialState = {
  count: 0,
  userDetails: {
    firstName: "John",
    lastName: "Doe",
  },
  students:[],
};
// [{
//   studentId: 'studentId',
//   firstName: '',
//   lastName: '',
//   CGPA: '',
// }]

const counterReducer = (state = initialState, action) => {
 console.log('Current State:', state);
    console.log('Action Received:', action);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: +state.count + +action.payload,
      };
    case "DECREMENT":
      return { ...state, count: +state.count - +action.payload };
    
        case ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload],
            };
        case REMOVE_STUDENT:
            return {
                ...state,
                students: state.students.filter((student) => student.id !== action.payload),
            };
        case UPDATE_STUDENT:
            return {
                ...state,
                students: state.students.map((student) =>
                    student.id === action.payload.id ? action.payload : student
                ),
            };
            case 'SET_STUDENTS':
            return {
                ...state,
                students: Array.isArray(action.payload) ? action.payload : [],
            };
        default:
            return state;
    }
};


export default counterReducer;
