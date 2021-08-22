import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Playground from "./Playground";

describe("<Playground />", () => {
  test("it should mount", () => {
    render(<Playground />);

    const playground = screen.getByTestId("Playground");

    expect(playground).toBeInTheDocument();
  });
});
