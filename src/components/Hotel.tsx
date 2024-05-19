// components/HotelComponent.tsx
import { useEffect, useState } from "react";
import Image from "next/image";
import type {
  Competitors,
  Hotel,
  SupportedCurrency,
  TaxesAndFees,
} from "@/types";
import Description from "./Description";

interface HotelProps {
  hotel: Hotel;
  currency: SupportedCurrency;
}

const HotelComponent: React.FC<HotelProps> = ({ hotel, currency }) => {
  const [price, setPrice] = useState<number | null>(hotel.price || null);
  const [competitors, setCompetitors] = useState<Competitors | null>(
    hotel.competitors || null
  );
  const [taxesAndFees, setTaxesAndFees] = useState<TaxesAndFees | null>(
    hotel.taxes_and_fees || null
  );

  useEffect(() => {
    setPrice(hotel.price || null);
    setCompetitors(hotel.competitors || null);
    setTaxesAndFees(hotel.taxes_and_fees || null);
  }, [hotel]);

  const renderCompetitorPrices = () => {
    if (!competitors) {
      return null;
    }

    const competitorEntries = Object.entries(competitors);
    const sortedCompetitors = competitorEntries.sort((a, b) => a[1] - b[1]);

    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Competitor Prices:</h3>
        <ul className="mt-2">
          {sortedCompetitors.map(([name, competitorPrice], index) => (
            <li key={index} className="flex items-center justify-between py-1">
              <span>{name}:</span>
              <span className="font-semibold">
                {currency === "KRW"
                  ? `${competitorPrice.toLocaleString()} KRW`
                  : `${currency} ${competitorPrice}`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderTaxInfo = () => {
    if (taxesAndFees) {
      return (
        <div className="flex items-center mt-2">
          <span className="text-gray-600 mr-2">Tax-Inclusive:</span>
          <span className="font-semibold">*</span>
          <div className="block ml-2 text-sm text-gray-500">
            <div>Tax: {taxesAndFees.tax}</div>
            <div>Hotel Fees: {taxesAndFees.hotel_fees}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex items-center mt-2">
          <span className="text-gray-600 mr-2">Tax-Exclusive</span>
        </div>
      );
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
      <div className="relative h-48">
        <Image
          src={hotel.photo}
          alt={hotel.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-48 w-full"
        />
      </div>
      <Description description={hotel.description} />
      <p className="text-gray-700 mb-2">Address: {hotel.address}</p>
      <p className="text-gray-700 mb-2">
        Stars: {hotel.stars} | Review Rating: {hotel.rating}/10
      </p>
      <div className="flex justify-between mt-2">
        <span className="text-gray-600 mr-2">Our Price:</span>
        <span className="font-semibold">
          {currency === "KRW"
            ? `${price?.toLocaleString()} KRW`
            : `${currency} ${price}`}
        </span>
      </div>
      {renderCompetitorPrices()}
      {renderTaxInfo()}
    </div>
  );
};

export default HotelComponent;
