import React from "react";
import { render, screen } from "@testing-library/react";
import CompetitorPrices from "../CompetitorPrices";

describe("CompetitorPrices component", () => {
  test("renders nothing when no competitors are provided", () => {
    render(<CompetitorPrices currency="USD" />);
    expect(screen.queryByText("Competitor Prices:")).toBeNull();
  });

  test("renders nothing when competitors are empty", () => {
    render(<CompetitorPrices competitors={{}} currency="USD" />);
    expect(screen.queryByText("Competitor Prices:")).toBeNull();
  });

  test("renders nothing when no ourPrice is provided", () => {
    const competitors = {
      Traveloka: 120,
      Expedia: 110,
      Booking: 105,
    };
    render(<CompetitorPrices competitors={competitors} currency="USD" />);
    expect(screen.queryByText("Competitor Prices:")).toBeNull();
  });

  test("renders competitor prices correctly", () => {
    const competitors = {
      Traveloka: 120,
      Expedia: 110,
      Booking: 105,
    };
    render(
      <CompetitorPrices
        competitors={competitors}
        currency="USD"
        ourPrice={100}
      />
    );
    expect(screen.getByText("Competitor Prices:")).toBeInTheDocument();
    expect(screen.getByText("Traveloka:")).toBeInTheDocument();
    expect(screen.getByText("Expedia:")).toBeInTheDocument();
    expect(screen.getByText("Booking:")).toBeInTheDocument();
    expect(screen.getByText("USD 120")).toBeInTheDocument();
    expect(screen.getByText("USD 110")).toBeInTheDocument();
    expect(screen.getByText("USD 105")).toBeInTheDocument();
  });

  test("renders savings correctly when ourPrice is cheaper", () => {
    const competitors = {
      Traveloka: 120,
      Expedia: 110,
      Booking: 105,
    };
    render(
      <CompetitorPrices
        competitors={competitors}
        currency="USD"
        ourPrice={100}
      />
    );
    expect(screen.getByText("Competitor Prices:")).toBeInTheDocument();
    expect(screen.getByText("Traveloka:")).toBeInTheDocument();
    expect(screen.getByText("Expedia:")).toBeInTheDocument();
    expect(screen.getByText("Booking:")).toBeInTheDocument();
    expect(screen.getByText("USD 120")).toBeInTheDocument();
    expect(screen.getByText("USD 110")).toBeInTheDocument();
    expect(screen.getByText("USD 105")).toBeInTheDocument();
    expect(screen.getByText("Savings:")).toBeInTheDocument();
    expect(screen.getByText("USD 20")).toBeInTheDocument();
  });

  test("does not render savings when ourPrice is not cheaper", () => {
    const competitors = {
      Traveloka: 120,
      Expedia: 110,
      Booking: 105,
    };
    render(
      <CompetitorPrices
        competitors={competitors}
        currency="USD"
        ourPrice={130}
      />
    );
    expect(screen.getByText("Competitor Prices:")).toBeInTheDocument();
    expect(screen.getByText("Traveloka:")).toBeInTheDocument();
    expect(screen.getByText("Expedia:")).toBeInTheDocument();
    expect(screen.getByText("Booking:")).toBeInTheDocument();
    expect(screen.getByText("USD 120")).toBeInTheDocument();
    expect(screen.getByText("USD 110")).toBeInTheDocument();
    expect(screen.getByText("USD 105")).toBeInTheDocument();
    expect(screen.queryByText("Savings:")).toBeNull();
  });
});
