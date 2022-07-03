import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

//This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

describe("About Component", () => {
  //First Test

  //verify that the component is rendering
  //in the first argument, a string declares what's being tested
  // in the second argument, a callback function runs the test
  it("renders", () => {
    render(<About />);
  });

  //Second Test
  it("matches snapshot DOM node structure", () => {
      //returns snapshot of of the About componet
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
