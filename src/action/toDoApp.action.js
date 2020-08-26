import toDoApp from "../constan/todo.constan";

export const inCrement = (payload) => {
  return {
    type: toDoApp.INCREMENT,
  };
};
export const deCrement = (payload) => {
  return {
    type: toDoApp.DECREMENT,
  };
};
