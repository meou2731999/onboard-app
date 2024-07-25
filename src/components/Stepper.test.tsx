// Stepper.test.tsx

import { render, screen } from "@testing-library/react";
import { Stepper } from "./Stepper";

describe("Stepper Component", () => {
  const renderStepper = (state: 1 | 2 | 3 | 4 | 5) =>
    render(<Stepper state={state} />);

  test("renders correctly for state 1", () => {
    renderStepper(1);

    // Check "About You" step
    expect(screen.getByText("About You")).toHaveClass("text-primary");
    expect(screen.getByText("1").parentElement).toHaveClass("bg-primary");
    expect(screen.getByText("1")).not.toHaveClass("text-gray-scale-60");

    // Check "Inspirations" step
    expect(screen.getByText("Inspirations")).not.toHaveClass("text-primary");
    expect(screen.getByText("2").parentElement).toHaveClass("bg-gray-scale-10");

    // Check "Brand Voice" step
    expect(screen.getByText("Brand Voice")).not.toHaveClass("text-primary");
    expect(screen.getByText("3").parentElement).toHaveClass("bg-gray-scale-10");

    // Check "Knowledge Base" step
    expect(screen.getByText("Knowledge Base")).not.toHaveClass("text-primary");
    expect(screen.getByText("4").parentElement).toHaveClass("bg-gray-scale-10");
  });

  test("renders correctly for state 2", () => {
    renderStepper(2);

    // Check "About You" step
    expect(screen.getByText("About You")).toHaveClass("text-primary");
    expect(screen.queryByText("1")).not.toBeInTheDocument();

    // Check "Inspirations" step
    expect(screen.getByText("Inspirations")).toHaveClass("text-primary");
    expect(screen.getByText("2").parentElement).toHaveClass("bg-primary");

    // Check "Brand Voice" step
    expect(screen.getByText("Brand Voice")).not.toHaveClass("text-primary");
    expect(screen.getByText("3").parentElement).toHaveClass("bg-gray-scale-10");

    // Check "Knowledge Base" step
    expect(screen.getByText("Knowledge Base")).not.toHaveClass("text-primary");
    expect(screen.getByText("4").parentElement).toHaveClass("bg-gray-scale-10");

    expect(screen.getAllByTestId("checked-icon")).toHaveLength(1);
  });

  test("renders correctly for state 3", () => {
    renderStepper(3);

    // Check "About You" step
    expect(screen.getByText("About You")).toHaveClass("text-primary");
    expect(screen.queryByText("1")).not.toBeInTheDocument();

    // Check "Inspirations" step
    expect(screen.getByText("Inspirations")).toHaveClass("text-primary");
    expect(screen.queryByText("2")).not.toBeInTheDocument();

    // Check "Brand Voice" step
    expect(screen.getByText("Brand Voice")).toHaveClass("text-primary");
    expect(screen.getByText("3").parentElement).toHaveClass("bg-primary");

    // Check "Knowledge Base" step
    expect(screen.getByText("Knowledge Base")).not.toHaveClass("text-primary");
    expect(screen.getByText("4").parentElement).toHaveClass("bg-gray-scale-10");

    expect(screen.getAllByTestId("checked-icon")).toHaveLength(2);
  });

  test("renders correctly for state 4", () => {
    renderStepper(4);

    // Check "About You" step
    expect(screen.getByText("About You")).toHaveClass("text-primary");
    expect(screen.queryByText("1")).not.toBeInTheDocument();

    // Check "Inspirations" step
    expect(screen.getByText("Inspirations")).toHaveClass("text-primary");
    expect(screen.queryByText("2")).not.toBeInTheDocument();

    // Check "Brand Voice" step
    expect(screen.getByText("Brand Voice")).toHaveClass("text-primary");
    expect(screen.queryByText("3")).not.toBeInTheDocument();

    // Check "Knowledge Base" step
    expect(screen.getByText("Knowledge Base")).toHaveClass("text-primary");
    expect(screen.getByText("4").parentElement).toHaveClass("bg-primary");

    expect(screen.getAllByTestId("checked-icon")).toHaveLength(3);
  });

  test("renders correctly for state 5", () => {
    renderStepper(5);

    // Check "About You" step
    expect(screen.getByText("About You")).toHaveClass("text-primary");
    expect(screen.queryByText("1")).not.toBeInTheDocument();

    // Check "Inspirations" step
    expect(screen.getByText("Inspirations")).toHaveClass("text-primary");
    expect(screen.queryByText("2")).not.toBeInTheDocument();

    // Check "Brand Voice" step
    expect(screen.getByText("Brand Voice")).toHaveClass("text-primary");
    expect(screen.queryByText("3")).not.toBeInTheDocument();

    // Check "Knowledge Base" step
    expect(screen.getByText("Knowledge Base")).toHaveClass("text-primary");
    expect(screen.queryByText("4")).not.toBeInTheDocument();

    expect(screen.getAllByTestId("checked-icon")).toHaveLength(4);
  });
});
