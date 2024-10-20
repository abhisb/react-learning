export const ACTION_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  UPDATE_USER_NAME: "UPDATE_USER_NAME",
};

// actions/counterActions.js
export const increment = (value) => ({
  type: ACTION_TYPES.INCREMENT,
  payload: value,
});

export const decrement = (value) => ({
  type: ACTION_TYPES.DECREMENT,
  payload: value,
});

export const updateUserNameAction = (value) => ({
  type: ACTION_TYPES.UPDATE_USER_NAME,
  payload: value,
});
