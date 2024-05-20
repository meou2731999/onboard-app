import React from "react";
import { render } from "@testing-library/react";
import PriceInfo from "../PriceInfo";

describe("PriceInfo", () => {
  it("renders correctly with USD currency", () => {
    const price = 123.45;
    const currency = "USD";
    const roundedPrice = Math.round(price);

    const { getByText } = render(
      <PriceInfo price={price} currency={currency} />
    );

    expect(getByText("Our Price:")).toBeInTheDocument();
    expect(getByText(`${currency} ${roundedPrice}`)).toBeInTheDocument();
  });

  it("renders correctly with KRW currency", () => {
    const price = 123456.78;
    const currency = "KRW";
    const roundedPrice = Math.round(price / 100) * 100;

    const { getByText } = render(
      <PriceInfo price={price} currency={currency} />
    );

    expect(getByText("Our Price:")).toBeInTheDocument();
    expect(getByText(`${currency} ${roundedPrice}`)).toBeInTheDocument();
  });

  it("renders correctly when price is undefined", () => {
    const currency = "USD";

    const { getByText } = render(<PriceInfo currency={currency} />);

    expect(getByText("Our Price:")).toBeInTheDocument();
    expect(getByText(`${currency}`)).toBeInTheDocument();
  });

  it("renders correctly with JPY currency", () => {
    const price = 7890.56;
    const currency = "JPY";
    const roundedPrice = Math.round(price / 100) * 100;

    const { getByText } = render(
      <PriceInfo price={price} currency={currency} />
    );

    expect(getByText("Our Price:")).toBeInTheDocument();
    expect(getByText(`${currency} ${roundedPrice}`)).toBeInTheDocument();
  });

  it("renders correctly with SGD currency", () => {
    const price = 150.75;
    const currency = "SGD";
    const roundedPrice = Math.round(price);

    const { getByText } = render(
      <PriceInfo price={price} currency={currency} />
    );

    expect(getByText("Our Price:")).toBeInTheDocument();
    expect(getByText(`${currency} ${roundedPrice}`)).toBeInTheDocument();
  });
});
