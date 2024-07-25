// VoiceName.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { VoiceName } from "./VoiceName"; // Adjust the import path as necessary

describe("VoiceName Component", () => {
  test("renders input field with placeholder", () => {
    render(<VoiceName />);

    // Check if the input field is rendered with the correct placeholder
    const inputField = screen.getByPlaceholderText(
      "Enter your brand voice name"
    );
    expect(inputField).toBeInTheDocument();
  });

  test("updates input value on change", () => {
    render(<VoiceName />);

    // Get the input field and simulate user typing
    const inputField = screen.getByPlaceholderText(
      "Enter your brand voice name"
    ) as HTMLInputElement;
    fireEvent.change(inputField, { target: { value: "My Brand Voice" } });

    // Check if the input field value updates correctly
    expect(inputField.value).toBe("My Brand Voice");
  });
});
