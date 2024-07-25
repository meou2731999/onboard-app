// Button.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import ReloadIcon from "@/assets/ReloadIcon";
import PlusCircleIcon from "@/assets/PlusCircleIcon";

describe("Button Component", () => {
  test("renders Button with text", () => {
    render(<Button text="Click Me" />);
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  test("applies the correct classes based on props", () => {
    render(<Button variant="secondary" size="small" text="Secondary Small" />);
    const buttonElement = screen.getByText("Secondary Small");
    expect(buttonElement).toHaveClass(
      "text-inherit text-body-small-semibold decoration-inherit whitespace-nowrap"
    );
  });

  test("renders Button with start icon", () => {
    render(<Button startIcon={<ReloadIcon />} text="Reload" />);
    const buttonElement = screen.getByText("Reload");
    expect(buttonElement).toBeInTheDocument();
    expect(screen.getByTestId("reload-icon")).toBeInTheDocument();
  });

  test("renders Button with end icon", () => {
    render(<Button endIcon={<PlusCircleIcon />} text="Add" />);
    const buttonElement = screen.getByText("Add");
    expect(buttonElement).toBeInTheDocument();
    expect(screen.getByTestId("plus-circle-icon")).toBeInTheDocument();
  });

  test("triggers onClick event handler", () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies disabled state correctly", () => {
    render(<Button text="Disabled" disabled />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass("!bg-disable");
  });
});
