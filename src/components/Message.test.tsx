// Message.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { Message } from "./Message";

describe("Message Component", () => {
  test("displays correct message for selection '0'", () => {
    render(<Message selection="0" />);
    expect(
      screen.getByText(
        "Tailor the content to your brand voice. Simply input your company's landing page URL. You can add additional brand voices later in the configure screen."
      )
    ).toBeInTheDocument();
  });

  test("displays correct message for selection '1'", () => {
    render(<Message selection="1" />);
    expect(
      screen.getByText(
        "Tailor the content to your brand voice. Simply input your company's landing page URL."
      )
    ).toBeInTheDocument();
  });

  test("displays correct message for selection '2'", () => {
    render(<Message selection="2" />);
    expect(
      screen.getByText(
        "Tailor the content to your brand voice. Simply input your company's landing page URL."
      )
    ).toBeInTheDocument();
  });

  test("displays default message for unknown selection", () => {
    // @ts-ignore: testing unknown key
    render(<Message selection="unknown" />);
    expect(screen.getByText("Default message")).toBeInTheDocument();
  });
});
