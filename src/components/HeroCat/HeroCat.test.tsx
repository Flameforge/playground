import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import HeroCat from "./HeroCat";

describe("<Hero />", () => {
  test("it should mount", () => {
    render(<HeroCat />);
    const hero = screen.getByTestId("HeroCat");
    expect(hero).toBeInTheDocument();
  });
});
