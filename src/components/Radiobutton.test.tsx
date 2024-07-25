// Radiobutton.test.tsx

import { render, screen, fireEvent } from "@testing-library/react";
import { Radiobutton } from "./Radiobutton";

describe("Radiobutton Component", () => {
  test("renders correctly with given label", () => {
    render(<Radiobutton label="Option 1" checked={false} onClick={() => {}} />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  test("applies checked style when checked", () => {
    render(<Radiobutton label="Option 1" checked={true} onClick={() => {}} />);
    const radiobuttonElement = screen.getByText("Option 1").closest("div");
    expect(radiobuttonElement).toHaveClass("border-primary");
  });

  test("applies unchecked style when not checked", () => {
    render(<Radiobutton label="Option 1" checked={false} onClick={() => {}} />);
    const radiobuttonElement = screen.getByText("Option 1").closest("div");
    expect(radiobuttonElement).toHaveClass("border-gray-scale-20");
  });

  test("triggers onClick event when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Radiobutton label="Option 1" checked={false} onClick={handleClick} />
    );
    fireEvent.click(screen.getByText("Option 1"));
    expect(handleClick).toHaveBeenCalled();
  });
});
