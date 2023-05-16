import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import HomePage from "pages";

describe("Filler content", () => {
  it("renders home page filler content", () => {
    render(<HomePage />);
    // check if all components are rendered
    expect(screen.queryByRole("main")).toBeInTheDocument();
    expect(screen.getByTestId("outer")).toBeInTheDocument();
    expect(screen.getByTestId("headline")).toBeInTheDocument();
    expect(screen.getByTestId("sub-headline")).toBeInTheDocument();
    expect(screen.getByTestId("fruit-basket")).toBeInTheDocument();
    expect(screen.getByTestId("avocado")).toBeInTheDocument();
  });
});