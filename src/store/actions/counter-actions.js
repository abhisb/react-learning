// actions/counterActions.js
export const ADD_STUDENT = 'ADD_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';


export const increment = (value) => ({
  type: "INCREMENT",
  payload: value,
});

export const decrement = (value) => ({
  type: "DECREMENT",
  payload: value,
});

export const addStudent = (student) => ({
    type: ADD_STUDENT,
    payload: student,
});

export const removeStudent = (id) => ({
    type: REMOVE_STUDENT,
    payload: id,
});

export const updateStudent = (student) => ({
    type: UPDATE_STUDENT,
    payload: student,
});
