import React from "react";
import { render, screen } from "@testing-library/react";
import RatingStars from "../RatingStars";

describe("RatingStars", () => {
  it("renders the correct number of star icons", () => {
    const starts = 5;
    render(<RatingStars starts={starts} />);

    const starIcons = screen.getAllByTestId("star-icon");
    expect(starIcons).toHaveLength(starts);
    starIcons.forEach((starIcon) => {
      expect(starIcon.lastChild).toHaveAttribute("fill", "#FFEA00");
    });
  });

  it("renders no star icons when starts is zero", () => {
    render(<RatingStars starts={0} />);

    const starIcons = screen.queryAllByTestId("star-icon");
    expect(starIcons).toHaveLength(0);
  });
});
