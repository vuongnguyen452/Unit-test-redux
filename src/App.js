import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { inCrement, deCrement } from "../src/action/toDoApp.action";

export const App = (props) => {
  const { counter, increment, decrement } = props;
  return (
    <div>
      <p>{counter}</p>
      <button id="increment" type="button" onClick={() => increment()}>
        Increment
      </button>
      <button id="decrement" type="button" onClick={() => decrement()}>
        Decrement
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.toDoAppp.counter,
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      increment: inCrement,
      decrement: deCrement,
    },
    dispatch
  );
};

const connected = connect(mapStateToProps, mapDispatchToProps)(App);

export default connected;
