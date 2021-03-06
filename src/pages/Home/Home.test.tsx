import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("<Home />", () => {
  test("it should mount", () => {
    render(<Home />);

    const home = screen.getByTestId("Home");
    expect(home).toBeInTheDocument();

    const hero = screen.getByTestId("Hero");
    expect(hero).toBeInTheDocument();

    const matrix = screen.getByTestId("Matrix");
    expect(matrix).toBeInTheDocument();
  });
});
