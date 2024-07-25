import { render, screen, fireEvent } from "@testing-library/react";
import { WhichDescribe } from "./WhichDescribe";

describe("WhichDescribe Component", () => {
  it("renders all radio buttons with correct labels", () => {
    const mockSetSelection = jest.fn();
    const selection = "0";

    render(
      <WhichDescribe selection={selection} setSelection={mockSetSelection} />
    );

    expect(
      screen.getByText(
        /Let Keoni extract your brand voice from files, published work or URLs/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Describe your brand voice to Keoni/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Quick Start from our templates/i)
    ).toBeInTheDocument();
  });

  it("updates selection state when a radio button is clicked", () => {
    // Mock selection state and setter
    const mockSetSelection = jest.fn();
    const selection = "0";

    render(
      <WhichDescribe selection={selection} setSelection={mockSetSelection} />
    );

    fireEvent.click(screen.getByText(/Describe your brand voice to Keoni/i));

    expect(mockSetSelection).toHaveBeenCalledWith("1");
  });

  it("displays the correct radio button as selected", () => {
    const mockSetSelection = jest.fn();
    const selection = "1";

    render(
      <WhichDescribe selection={selection} setSelection={mockSetSelection} />
    );

    expect(screen.getAllByRole("radio")[0]).not.toBeChecked();

    expect(screen.getAllByRole("radio")[1]).toBeChecked();
    expect(
      screen.queryByText(/Quick Start from our templates/i)
    ).not.toBeChecked();
  });
});
