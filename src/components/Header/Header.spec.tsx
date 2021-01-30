import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";

describe("render Header component", () => {
    let container: any;
    beforeEach(() => (container = shallow(<Header islit={true} setlit={jest.fn()} />)));

    it("should render a div", () => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1);
    });

});