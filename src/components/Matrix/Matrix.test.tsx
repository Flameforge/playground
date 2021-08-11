import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Matrix from "./Matrix";

describe("<Matrix />", () => {
  test("it should mount", () => {
    render(<Matrix />);

    const matrix = screen.getByTestId("Matrix");

    expect(matrix).toBeInTheDocument();
  });
});
