const initialState = { counter: 10 };

// Reducer
export default function toDoAppp(state = initialState, action = {}) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
