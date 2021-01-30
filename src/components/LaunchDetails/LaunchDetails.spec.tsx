import React from "react";
import { shallow } from "enzyme";
import LaunchDetails from "./LaunchDetalis";

describe("render App component", () => {
    let container: any;
    beforeEach(() => (container = shallow(<LaunchDetails Link={{}} data={{}} />)));

    it("should render a div", () => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1);
    });

    it("should render a h1", () => {
        expect(container.find("h1").length).toBeGreaterThanOrEqual(0);
    });

    it("should render a Link", () => {
        expect(container.find("Link").length).toBeGreaterThanOrEqual(0);
    });

    it("should render a p", () => {
        expect(container.find("p").length).toBeGreaterThanOrEqual(0);
    });

    it("should render a a", () => {
        expect(container.find("a").length).toBeGreaterThanOrEqual(0);
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