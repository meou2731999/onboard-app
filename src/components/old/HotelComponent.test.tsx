import React from "react";
import { render, screen } from "@testing-library/react";
import HotelComponent from "../HotelComponent";
import type { Hotel } from "@/types";

describe("HotelComponent", () => {
  const hotel: Hotel = {
    id: 1,
    name: "Sample Hotel",
    photo: "https://via.placeholder.com/300",
    address: "123 Sample Address, Sample City",
    stars: 4,
    rating: 8.5,
    description: "This is a sample hotel description.",
    price: 100,
    taxes_and_fees: {
      tax: 14,
      hotel_fees: 12.4,
    },
    competitors: {
      Traveloka: 90,
      Expedia: 95,
      Booking: 105,
    },
  };

  test("renders hotel component correctly", () => {
    render(<HotelComponent hotel={hotel} currency="USD" />);

    // Check hotel name and address
    expect(screen.getByText(hotel.name)).toBeInTheDocument();
    expect(screen.getByText(hotel.address)).toBeInTheDocument();

    // Check stars and review rating
    expect(screen.getByText(`Stars:`)).toBeInTheDocument();
    expect(screen.getByText("Review Rating:")).toBeInTheDocument();

    expect(screen.getByText(`${hotel.rating}/10`)).toBeInTheDocument();

    // Check description
    expect(screen.getByText(hotel.description)).toBeInTheDocument();

    // Check price and taxes
    expect(screen.getByText(`Our Price:`)).toBeInTheDocument();
    expect(screen.getByText(`Tax-Inclusive:*`)).toBeInTheDocument();
    expect(screen.getByText(`Competitor Prices:`)).toBeInTheDocument();

    // Check if competitor prices are rendered
    expect(screen.getByText("Traveloka:")).toBeInTheDocument();
    expect(screen.getByText("Expedia:")).toBeInTheDocument();
    expect(screen.getByText("Booking:")).toBeInTheDocument();
    expect(screen.getByText("USD 90")).toBeInTheDocument();
    expect(screen.getByText("USD 95")).toBeInTheDocument();
    expect(screen.getByText("USD 105")).toBeInTheDocument();
  });
});
