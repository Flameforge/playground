import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<Home />", () => {
  test("it should mount", () => {
    render(<App />);

    const home = screen.getByTestId("App");

    expect(home).toBeInTheDocument();
  });
});
