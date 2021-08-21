import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Privacy from "./Privacy";

describe("<Privacy />", () => {
  test("it should mount", () => {
    render(<Privacy />);

    const privacy = screen.getByTestId("Privacy");

    expect(privacy).toBeInTheDocument();
  });
});
