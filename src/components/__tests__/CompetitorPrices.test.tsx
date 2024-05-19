import { render, screen } from "@testing-library/react";
import { Competitors } from "@/types";
import CompetitorPrices from "../CompetitorPrices";

describe("CompetitorPrices Component", () => {
  it("renders competitor prices correctly", () => {
    const competitors: Competitors = {
      Traveloka: 190,
      Expedia: 163,
    };

    render(<CompetitorPrices competitors={competitors} currency="USD" />);

    // Assert the presence of rendered competitor prices
    expect(screen.getByText("Competitor Prices:")).toBeInTheDocument();

    // Assert Traveloka price
    expect(screen.getByText("Traveloka:")).toBeInTheDocument();
    expect(screen.getByText("USD 190")).toBeInTheDocument();

    // Assert Expedia price
    expect(screen.getByText("Expedia:")).toBeInTheDocument();
    expect(screen.getByText("USD 163")).toBeInTheDocument();
  });

  it("renders competitor prices correctly for KRW currency", () => {
    const competitors: Competitors = {
      Traveloka: 300000,
      Expedia: 280000,
    };

    render(<CompetitorPrices competitors={competitors} currency="KRW" />);

    // Assert the presence of rendered competitor prices
    expect(screen.getByText("Competitor Prices:")).toBeInTheDocument();

    // Assert Traveloka price
    expect(screen.getByText("Traveloka:")).toBeInTheDocument();
    expect(screen.getByText("300,000 KRW")).toBeInTheDocument();

    // Assert Expedia price
    expect(screen.getByText("Expedia:")).toBeInTheDocument();
    expect(screen.getByText("280,000 KRW")).toBeInTheDocument();
  });

  it("not renders competitor if data undefined", () => {
    render(<CompetitorPrices competitors={undefined} currency="KRW" />);

    // Assert the presence of rendered competitor prices
    expect(screen.queryByText("Competitor Prices:")).not.toBeInTheDocument();
  });
});
