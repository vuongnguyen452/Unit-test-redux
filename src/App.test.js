import React from "react";
import Enzyme, { shallow } from "enzyme";

// Notice the non default export here
import App from "./App";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

let component;

const mockProps = {
  counter: 0,
};

describe("Counter Component", () => {
  component = shallow(<App {...mockProps} />);

  it("displays the counter value", () => {
    expect(component.find("p").text()).toBe("0");
  });
});
