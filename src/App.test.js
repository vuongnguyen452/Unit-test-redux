import React from "react";
import { shallow } from "enzyme";

// Notice the non default export here
import { App } from "./App";

let component;

const mockProps = {
  counter: 1,
  increment: jest.fn(() => 1),
  decrement: jest.fn(() => -1),
};

describe("Counter Component", () => {
  beforeAll(() => {
    component = shallow(<App {...mockProps} />);
  });

  it("displays the counter value", () => {
    expect(component.find("p").text()).toBe("0");
  });
  it("triggers the increment function", () => {
    component.find("#increment").simulate("click");
    expect(mockProps.increment.mock.results[0].value).toBe(1);
  });
});
