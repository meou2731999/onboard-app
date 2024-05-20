import { render, screen } from "@testing-library/react";
import { TaxesAndFees } from "@/types";
import TaxInfo from "../TaxInfo";

describe("TaxInfo Component", () => {
  it("renders tax-inclusive info correctly", () => {
    const taxesAndFees: TaxesAndFees = {
      tax: 10.5,
      hotel_fees: 15.75,
    };

    render(<TaxInfo taxesAndFees={taxesAndFees} />);

    expect(screen.getByText("Tax-Inclusive:")).toBeInTheDocument();
    expect(screen.getByText("Tax: 10.5")).toBeInTheDocument();
    expect(screen.getByText("Hotel Fees: 15.75")).toBeInTheDocument();
  });

  it("renders tax-exclusive info correctly", () => {
    render(<TaxInfo taxesAndFees={undefined} />);

    expect(screen.getByText("Tax-Exclusive")).toBeInTheDocument();
  });
});
