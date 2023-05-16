import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import HomePage from "pages";

describe("Filler content", () => {
  it("renders a calculator", () => {
    render(<HomePage />);
    // check if all components are rendered
    expect(screen.getByTestId("outer-container")).toBeInTheDocument();
    expect(screen.getByTestId("headline")).toBeInTheDocument();
    expect(screen.getByTestId("sub-headline")).toBeInTheDocument();
    expect(screen.getByTestId("fruit-basket")).toBeInTheDocument();
    expect(screen.getByTestId("avocado")).toBeInTheDocument();
  });
});