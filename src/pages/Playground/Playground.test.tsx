import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Playground from "./Playground";

describe("<Playground />", () => {
  test("it should mount", () => {
    render(<Playground />);

    const playground = screen.getByTestId("Playground");

    expect(playground).toBeInTheDocument();
  });
});
