// Protip.test.tsx

import { render, screen } from "@testing-library/react";
import { Protip } from "./Protip";

describe("Protip Component", () => {
  test("renders correctly", () => {
    render(<Protip />);
    // Check if the pro tip container is rendered
    expect(screen.getByText("✨ Pro Tip:")).toBeInTheDocument();
    // Check if the message is rendered
    expect(
      screen.getByText(/Help Keoni extract your precise brand voice/)
    ).toBeInTheDocument();
  });

  test("has correct styling", () => {
    render(<Protip />);
    // Check for the presence of specific classes for styling
    const protipElement = screen.getByText("✨ Pro Tip:");
    expect(protipElement).toHaveClass("text-body-medium-semibold");
    expect(protipElement.closest("div")).toHaveClass(
      "bg-[#f0ebfd] border-primary"
    );
  });
});
