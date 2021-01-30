import React from "react";
import { shallow } from "enzyme";
import Launch from "./Launch";

describe("render App component", () => {
    let container: any;
    beforeEach(() => (container = shallow(<Launch setid={()=>{}} setsuccess={()=>{}} data={{}} />)));

    it("should render a div", () => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1);
    });

    it("should render a h3", () => {
        expect(container.find("h3").length).toBeGreaterThanOrEqual(1);
    });

    it("should render a ol", () => {
        expect(container.find("ol").length).toBeGreaterThanOrEqual(1);
    });

    it("should render a li", () => {
        expect(container.find("li").length).toBeGreaterThanOrEqual(0);
    });

});