import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import LaunchContainer from "./components/Launch/index";
import LaunchDeatailsContainer from "./components/LaunchDetails/index";

const String='null';

describe("render App component", () => {
  let container: any;
  beforeEach(() => (container = shallow(<App />)));

  it("should render a div", () => {
    expect(container.find("div").length).toEqual(2);
  });

  it("should render LaunchContainer component", () => {
    expect(container.containsMatchingElement(<LaunchContainer islit={true} setid={jest.fn()}/>)).toEqual(false);
  });

  it("should render LaunchDetailsContainer component", () => {
    expect(container.containsMatchingElement(<LaunchDeatailsContainer idstate={String} />)).toEqual(false);
  });

});