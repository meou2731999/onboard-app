// Field.test.tsx


import { render, screen, fireEvent } from "@testing-library/react";
import { Field } from "./Field";

describe("Field Component", () => {
  test("renders with placeholder", () => {
    render(<Field />);
    expect(screen.getByPlaceholderText("input URL")).toBeInTheDocument();
  });

  test("renders with value", () => {
    render(<Field value="example.com" onChange={jest.fn()} />);
    expect(screen.getByDisplayValue("example.com")).toBeInTheDocument();
  });

  test("calls onChange handler", () => {
    const handleChange = jest.fn();
    render(<Field onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "example.com" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("displays the correct prefix", () => {
    render(<Field />);
    expect(screen.getByText("https://")).toBeInTheDocument();
  });
});
