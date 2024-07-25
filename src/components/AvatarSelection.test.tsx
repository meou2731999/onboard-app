import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AvatarSelection } from "./AvatarSelection";

describe("AvatarSelection Component", () => {
  test("renders avatar selection component", () => {
    render(<AvatarSelection />);
    expect(screen.getByText("Choose avatar")).toBeInTheDocument();
    expect(screen.getByText("Upload custom avatar")).toBeInTheDocument();
  });

  test("displays overlay when an avatar is selected", () => {
    render(<AvatarSelection />);
    const avatarImage = screen.getByAltText("Avatar 1");
    fireEvent.click(avatarImage);
    expect(screen.getByAltText("Avatar 1").parentElement).toHaveClass(
      "relative"
    );
    expect(screen.getByText("Upload custom avatar")).toBeInTheDocument();
  });

  test("handles file upload", () => {
    render(<AvatarSelection />);
    const fileInput = screen.getByTestId("file-input");

    const file = new File(["hello"], "hello.png", { type: "image/png" });

    fireEvent.change(fileInput, {
      target: { files: [file] },
    });

    expect(screen.getByText("hello.png")).toBeInTheDocument();
  });

  test("handles drag and drop file upload", () => {
    render(<AvatarSelection />);
    const dropZone = screen.getByText("Upload custom avatar").closest("div");

    const file = new File(["world"], "world.png", { type: "image/png" });

    dropZone && fireEvent.dragOver(dropZone);
    dropZone &&
      fireEvent.drop(dropZone, {
        dataTransfer: {
          files: [file],
        },
      });

    expect(screen.getByText("world.png")).toBeInTheDocument();
  });
});
