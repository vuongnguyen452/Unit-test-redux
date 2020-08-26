import React from "react";
import { connect } from "react-redux";

export const App = ({ counter }) => {
  console.log(counter);
  return <p>{counter}</p>;
};

const mapStateToProps = (state) => ({
  counter: state.toDoAppp.counter,
});

export default connect(mapStateToProps)(App);
