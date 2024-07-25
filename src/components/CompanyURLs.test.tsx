// CompanyURLs.test.tsx

import { render, screen, fireEvent } from "@testing-library/react";
import { CompanyURLs } from "./CompanyURLs";

describe("CompanyURLs Component", () => {
  test("renders initial URL input", () => {
    render(<CompanyURLs />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("adds URL input field", () => {
    render(<CompanyURLs />);
    fireEvent.click(screen.getByText("Add more URLs"));
    expect(screen.getAllByRole("textbox").length).toBe(2);
  });

  test("removes URL input field", () => {
    render(<CompanyURLs />);
    fireEvent.click(screen.getByText("Add more URLs"));
    fireEvent.click(screen.getByText("Add more URLs"));
    const removeButtons = screen.getAllByTestId("x-icon");
    fireEvent.click(removeButtons[0].closest("button")!);
    expect(screen.getAllByRole("textbox").length).toBe(2);
  });

  test("input value changes correctly", () => {
    render(<CompanyURLs />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "https://example.com" } });
    expect(input.value).toBe("https://example.com");
  });
});
