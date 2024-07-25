// Title.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { Title } from "./Title"; // Adjust the import path as necessary

describe("Title Component", () => {
  test("renders welcome message and description text", () => {
    render(<Title />);

    // Check if the welcome message is rendered correctly
    expect(screen.getByText("Welcome onboard, Jordan!")).toHaveClass(
      "text-display-small-semibold"
    );

    // Check if the description text is rendered correctly
    expect(
      screen.getByText(
        "Help Keoni.ai create personalized content for you (<5 min)"
      )
    ).toHaveClass("text-title-small-regular");
    expect(
      screen.getByText(
        "Help Keoni.ai create personalized content for you (<5 min)"
      )
    ).toHaveClass("text-gray-scale-60");
  });

  test("contains correct class names", () => {
    render(<Title />);

    // Check if the component contains the correct class names
    const welcomeText = screen.getByText("Welcome onboard, Jordan!");
    const descriptionText = screen.getByText(
      "Help Keoni.ai create personalized content for you (<5 min)"
    );

    expect(welcomeText).toHaveClass("text-display-small-semibold");
    expect(descriptionText).toHaveClass("text-title-small-regular");
    expect(descriptionText).toHaveClass("text-gray-scale-60");
  });
});
