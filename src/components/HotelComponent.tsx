import { useEffect, useState } from "react";
import Image from "next/image";
import type {
  Competitors,
  Hotel,
  SupportedCurrency,
  TaxesAndFees,
} from "@/types";
import Description from "./Description";
import CompetitorPrices from "./CompetitorPrices";
import TaxInfo from "./TaxInfo";

interface HotelProps {
  hotel: Hotel;
  currency: SupportedCurrency;
}

const HotelComponent: React.FC<HotelProps> = ({ hotel, currency }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mt-4">{hotel.name}</h2>
      <div className="relative h-48 mt-4">
        <Image
          src={hotel.photo}
          alt={hotel.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-48 w-full rounded"
        />
      </div>
      <Description description={hotel.description} />
      <p className="text-gray-700 mt-2">Address: {hotel.address}</p>
      <p className="text-gray-700 mt-2">
        Stars: {hotel.stars} | Review Rating: {hotel.rating}/10
      </p>
      <div className="flex justify-between mt-2">
        <span className="text-gray-600 mr-2">Our Price:</span>
        <span className="font-semibold">
          {currency === "KRW"
            ? `${hotel.price?.toLocaleString()} KRW`
            : `${currency} ${hotel.price}`}
        </span>
      </div>
      <CompetitorPrices competitors={hotel.competitors} currency={currency} />
      <TaxInfo taxesAndFees={hotel.taxes_and_fees} />
    </div>
  );
};

export default HotelComponent;
