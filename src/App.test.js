import React from "react";
import { render, fireEvent, screen } from "./test-utils";
import App from "./App";

it("Renders the connected app with initialState", () => {
  render(<App />, { initialState: { counter: "10" } });
  console.log(screen);
  expect(screen.getByText(/Increment/i)).toBeInTheDocument();
});
