import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("<Home />", () => {
  test("it should mount", () => {
    render(<App />);

    const home = screen.getByTestId("App");

    expect(home).toBeInTheDocument();
  });
});
