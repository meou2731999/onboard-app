// VoiceSuggestion.test.tsx

import { render, screen, fireEvent } from "@testing-library/react";
import { VoiceSuggestion } from "./VoiceSuggestion"; // Adjust the import path as necessary

const PLACEHOLDER_TEXT =
  "Fill out all the fields, and we’ll craft the perfect brand voice for you!";
const GENERATE_TEXT = "Generate Now";
const CONTENT_TEXT =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ex repellendus atque, incidunt enim adipisci. Quia id labore rerum necessitatibus, ea, eaque consectetur fugiat modi dolorum delectus incidunt soluta aut.";

describe("VoiceSuggestion Component", () => {
  const setup = () => render(<VoiceSuggestion />);

  test("renders initial state with placeholder message", () => {
    setup();

    expect(screen.getByText(PLACEHOLDER_TEXT)).toBeInTheDocument();
    expect(screen.getByText(GENERATE_TEXT)).toBeInTheDocument();
  });

  test("displays content after clicking 'Generate Now'", () => {
    setup();

    fireEvent.click(screen.getByText(GENERATE_TEXT));

    expect(screen.getByText(CONTENT_TEXT)).toBeInTheDocument();
  });

  test("clears content when clicking 'Regenerate'", () => {
    setup();

    fireEvent.click(screen.getByText(GENERATE_TEXT));
    fireEvent.click(screen.getByText("Regenerate"));

    expect(screen.getByText(PLACEHOLDER_TEXT)).toBeInTheDocument();
    expect(screen.getByText(GENERATE_TEXT)).toBeInTheDocument();
  });
});
