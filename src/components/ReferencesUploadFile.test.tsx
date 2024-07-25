// ReferencesUploadFile.test.tsx

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ReferencesUploadFile } from "./ReferencesUploadFile";

describe("ReferencesUploadFile Component", () => {
  test("renders correctly and displays 'Choose file' when no files are uploaded", () => {
    render(<ReferencesUploadFile />);
    expect(screen.getByText(/Drag & Drop or/i)).toBeInTheDocument();
  });

  test("displays the uploaded file name and 'Change File' button", () => {
    const { container } = render(<ReferencesUploadFile />);

    // Mock the file input
    const fileInput = container.querySelector('input[type="file"]');
    const file = new File(["content"], "example.pdf", {
      type: "application/pdf",
    });

    // Simulate file selection
    Object.defineProperty(fileInput, "files", {
      value: [file],
      configurable: true,
    });
    fileInput && fireEvent.change(fileInput);

    expect(screen.getByText("example.pdf")).toBeInTheDocument();
    expect(screen.getByText("Change File")).toBeInTheDocument();
  });

  test("handles drag and drop events", async () => {
    const { container } = render(<ReferencesUploadFile />);

    const dropzone = container.querySelector('div[role="presentation"]');

    const file = new File(["content"], "example.pdf", {
      type: "application/pdf",
    });
    const dataTransfer = {
      files: [file],
    };

    await waitFor(() => {
      dropzone && fireEvent.dragOver(dropzone, { dataTransfer });
      expect(dropzone).toHaveClass("border-primary-dark");

      dropzone && fireEvent.drop(dropzone, { dataTransfer });
      expect(screen.getByText("example.pdf")).toBeInTheDocument();
    });
  });
});
