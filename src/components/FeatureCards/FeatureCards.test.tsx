import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import FeatureCards from "./FeatureCards";

describe("<FeatureCards />", () => {
  test("it should mount", () => {
    render(<FeatureCards />);

    const featureCards = screen.getByTestId("FeatureCards");

    expect(featureCards).toBeInTheDocument();
  });
});
