import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ScrollTop from "./ScrollTop";

describe("<ScrollTop />", () => {
  test("it should mount", () => {
    render(<ScrollTop />);

    const scrollTop = screen.getByTestId("ScrollTop");

    expect(scrollTop).toBeInTheDocument();
  });
});
