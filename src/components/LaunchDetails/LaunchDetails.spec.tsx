import React from "react";
import { shallow } from "enzyme";
import LaunchDetails from "./LaunchDetalis";

describe("render App component", () => {
    let container: any;
    beforeEach(() => (container = shallow(<LaunchDetails success={''} data={{}} />)));

    it("should render a div", () => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(0);
    });

    it("should render a h1", () => {
        expect(container.find("h1").length).toBeGreaterThanOrEqual(0);
    });

    it("should render a p", () => {
        expect(container.find("p").length).toBeGreaterThanOrEqual(0);
    });

    it("should render a span", () => {
        expect(container.find("span").length).toBeGreaterThanOrEqual(0);
    });

    it("should render a img", () => {
        expect(container.find("img").length).toBeGreaterThanOrEqual(0);
    });

    it("should render a iframe", () => {
        expect(container.find("iframe").length).toBeGreaterThanOrEqual(0);
    });

});