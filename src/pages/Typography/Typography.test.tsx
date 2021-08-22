import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Typography from "./Typography";

describe("<Typography />", () => {
  test("it should mount", () => {
    render(<Typography />);

    const typography = screen.getByTestId("Typography");

    expect(typography).toBeInTheDocument();
  });
});
