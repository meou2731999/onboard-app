import React from "react";
import { render } from "@testing-library/react";
import type { SupportedCurrency } from "@/types";
import PriceInfo from "../PriceInfo";

describe("PriceInfo", () => {
  it("renders price in KRW correctly", () => {
    const price = 100000;
    const currency: SupportedCurrency = "KRW";
    const { getByText } = render(
      <PriceInfo price={price} currency={currency} />
    );

    expect(getByText("Our Price:")).toBeInTheDocument();
    expect(getByText("100,000 KRW")).toBeInTheDocument();
  });

  it("renders price in USD correctly", () => {
    const price = 100;
    const currency: SupportedCurrency = "USD";
    const { getByText } = render(
      <PriceInfo price={price} currency={currency} />
    );

    expect(getByText("Our Price:")).toBeInTheDocument();
    expect(getByText("USD 100")).toBeInTheDocument();
  });

  it("renders without crashing when price is undefined", () => {
    const currency: SupportedCurrency = "USD";
    const { getByText } = render(<PriceInfo currency={currency} />);

    expect(getByText("Our Price:")).toBeInTheDocument();
    expect(getByText("USD undefined")).toBeInTheDocument();
  });
});
