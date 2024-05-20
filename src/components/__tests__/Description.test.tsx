// components/__tests__/Description.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Description from "../Description";

describe("Description Component", () => {
  it("renders long description with line clamp", async () => {
    const longText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ligula id quam hendrerit volutpat. Duis tincidunt pharetra turpis vitae efficitur. Curabitur consectetur, lectus eget vestibulum aliquet, metus elit condimentum justo, sit amet maximus sapien libero eget purus.";

    render(<Description description={longText} />);

    expect(screen.getByText("About Hotel:")).toBeInTheDocument();

    const descriptionElement = screen.getByText(longText);
    expect(descriptionElement).toHaveClass("line-clamp-5");
  });

  it("renders short description", () => {
    const shortText = "Short description text.";

    render(<Description description={shortText} />);

    expect(screen.getByText("About Hotel:")).toBeInTheDocument();
    expect(screen.getByText(shortText)).toBeInTheDocument();
  });
});
