import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeroButton from "./HeroButton";

describe("<HeroButton />", () => {
  test("it should mount", () => {
    render(<HeroButton />);

    const heroButton = screen.getByTestId("HeroButton");

    expect(heroButton).toBeInTheDocument();
  });
});
